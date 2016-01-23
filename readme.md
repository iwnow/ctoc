### migrations
1. Add migration: dnx ef migrations add InitMigration
2. Update DataBase: dnx ef database update


### Docker
#### DNX patch for linux Socket.Select() method
`COPY ./dnxpatch/System.Native.so /opt/DNX_BRANCH/runtimes/dnx-coreclr-linux-x64.1.0.0-rc1-update1/bin`
[issue](https://github.com/dotnet/corefx/issues/4631#issuecomment-165893079)