<!--1. Create webapi project in  cli -->
doctnet new webapi -n DockerAPI

<!--2. Build dotnet project -->
dotnet build

<!--3. Run dotnet project -->
dotnet run

https://localhost:7260
http://localhost:5109


<!--4. Create Dockerfile -->
build docker file

<!--5. Create .net Ignore to excluse /bin and /obj -->
.dockerignore to ignore file

<!--6. build docker images from docker file -->
docker build rajudocker1975/dockerapi

<!--7. List docker images -->
docker images

<!-- 8. run docker container  -->
docker run  -p 8080:80 rajudocker1975/dockerapi
<!-- 9. push to docker repository -->
   docker push rajudocker1975/dockerapi