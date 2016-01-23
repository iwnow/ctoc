using Microsoft.Extensions.Configuration;
using System.IO;

namespace Call2Collegs.Services{
    public class ConfigService : IConfigService {
        public static string AppBasePath {get;set;}
        static string _settingsFileName = "settings.json";
        static IConfiguration Configuration {get;set;}
        
        
        public string GetValue(string key){
            if (Configuration == null)
                Configuration = new ConfigurationBuilder()
                    .AddJsonFile(Path.Combine(AppBasePath, _settingsFileName))
                    .Build();
            return Configuration[key];
        }
    }
    
    public interface IConfigService{
        string GetValue(string key);
    }
}