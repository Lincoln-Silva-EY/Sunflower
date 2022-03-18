using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName = "Lincoln", UserName = "lico", Email = "lico@test.com", Bio = ""},
                    new AppUser{DisplayName = "Guilherme", UserName = "gunther", Email = "gui@test.com", Bio = ""},
                    new AppUser{DisplayName = "Aguinaldo", UserName = "timotio", Email = "naldo@test.com", Bio = ""},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
               
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}