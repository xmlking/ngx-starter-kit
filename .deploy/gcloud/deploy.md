# Build and Deploy

We can build and test our web app by running:

```bash
docker build -t gcr.io/PROJECT_ID/crystal-www-example:latest .
docker run -p 8080:8080 gcr.io/PROJECT_ID/crystal-www-example:latest
```

we can push our app to GCR by running:
```bash
docker push gcr.io/PROJECT_ID/crystal-www-example:latest
```

kubectl run -it --rm hello-world --image=gcr.io/google-samples/node-hello:1.0 --restart=Never  --port 8080  --expose=true 
 
