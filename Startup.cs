using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;

using Call2Collegs.Services;

namespace Call2Collegs
{
    public class Startup
    {
        public Startup(IApplicationEnvironment applicationEnvironment, IRuntimeEnvironment runtimeEnvironment)
        {
            ConfigService.AppBasePath = applicationEnvironment.ApplicationBasePath;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped(typeof(IConfigService), typeof(ConfigService));
            services.AddScoped<IDataAccessProvider, DataAccessPostgreSqlProvider>();
            
            services.AddEntityFramework()
                    .AddNpgsql()
                    .AddDbContext<NpgDbContext>();
            // Add MVC services to the services container
            services.AddMvc();
        }

        //This method is invoked when ASPNET_ENV is 'Production'
        //The allowed values are Development,Staging and Production
        public void ConfigureProduction(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(minLevel: LogLevel.Warning);
            //Console.WriteLine(Configuration["appInfo:name"]);

            // StatusCode pages to gracefully handle status codes 400-599.
            //app.UseStatusCodePagesWithRedirects("~/Home/StatusCodePage");

            app.UseDeveloperExceptionPage();

            Configure(app);
        }

        public void Configure(IApplicationBuilder app)
        {
            // Configure Session.
            //app.UseSession();

            // Add static files to the request pipeline
            app.UseStaticFiles();

            // Add cookie-based authentication to the request pipeline
            //app.UseIdentity();

            //app.UseStatusCodePagesWithReExecute("/Errors/Error{0}");
            app.UseStatusCodePagesWithReExecute("/");

            // Add MVC to the request pipeline
            app.UseMvc(routes =>
            {          

                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action}/{id?}",
                    defaults: new { controller = "Home", action = "Index" });

                routes.MapRoute(
                    name: "api",
                    template: "{controller}/{id?}");
            });
        }
    }
}