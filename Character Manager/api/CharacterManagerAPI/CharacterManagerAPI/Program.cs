using CharacterManagerAPI;
using CharacterManagerAPI.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Data.Common;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddJsonOptions(x => {
    x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//builder.Services.AddDbContext<CMContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("CharacterManager")));
builder.Services.AddPooledDbContextFactory<CMContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("CharacterManager")));
builder.Services.AddCors(policy => policy.AddPolicy("CorsPolicy", build =>
{
    build.WithOrigins("http://localhost:5173", "http://127.0.0.1:5173").AllowAnyMethod().AllowAnyHeader();
}));
builder.Services.AddGraphQLServer()
    .AddQueryType<Query>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//enable migrations on project startup
using (var scope = app.Services.CreateScope())
{
    //var db = scope.ServiceProvider.GetRequiredService<CMContext>();
    IDbContextFactory<CMContext> contextFactory = scope.ServiceProvider.GetRequiredService<IDbContextFactory<CMContext>>();
    using(CMContext db = contextFactory.CreateDbContext())
    {
        db.Database.Migrate();
    }
}

app.UseCors("CorsPolicy");
app.MapGraphQL();

app.UseAuthorization();

app.MapControllers();

app.Run();
