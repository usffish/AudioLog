using AspNetStatic;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Add this before builder.Build();
builder.Services.AddSingleton<IStaticResourcesInfoProvider>(new StaticResourcesInfoProvider(new[] {
    new PageResource("/"){ OutFile = "index.html" }, // Your Home Page
    new PageResource("/Home/About"){ OutFile = "About.html" },
    new PageResource("/Home/visualizations"){ OutFile = "visualizations.html" },
    new PageResource("/Review/Create"){ OutFile = "Create.html" },
    new PageResource("/Review/Read"){OutFile = "Read.html"},
    new PageResource("/Review/Update"){OutFile="Update.html"},
    new PageResource("/Review/Delete"){OutFile="Delete.html"},
    // Add any other specific routes you need here
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();

app.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();

// 1. Define a folder name inside your current project directory
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "StaticOutput");

// 2. Tell C# to create the folder if it doesn't exist yet
if (!Directory.Exists(outputPath))
{
    Directory.CreateDirectory(outputPath);
}

// 3. Generate the static site into that newly created folder
app.GenerateStaticContent(outputPath);

app.Run();