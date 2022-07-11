# get base SDK image for microsoft
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app

#copy the csproj file and restore any dependencies via Nuget
COPY *.csproj ./
RUN dotnet restore

# copy the project file and restore our release
COPY . ./
RUN dotnet publish -c Release -o out

# generate runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
EXPOSE 80 443
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "DockerAPI.dll"]
