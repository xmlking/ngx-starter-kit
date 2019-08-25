# Helm Chart Templates for Node.js in Kubernetes

This project provides template Helm Charts for deploying a Node.js web application into any Kubernetes based cloud.

The templates require your application to built into a Docker image. The [Docker Templates](../../Dockerfile) provides assistance in creating an image for your application.

In order to use these template, copy the files from this project into your application directory. You should only need to edit the `Chart.yaml` and `values.yaml` files.

## Prerequisites

Using the template Helm charts assumes the following pre-requisites are complete:  

1. You have a Kubernetes cluster  
  This could be one hosted by a cloud provider or running locally, for example using [Minikube](https://kubernetes.io/docs/setup/minikube/)
  
2. You have kubectl installed and configured for your cluster  
  The [Kuberenetes command line](https://kubernetes.io/docs/tasks/tools/install-kubectl/) tool, `kubectl`, is used to view and control your Kubernetes cluster. 

3. You have the Helm command line and Tiller backend installed  
   [Helm and Tiller](https://docs.helm.sh/using_helm/) provide the command line tool and backend service for deploying your application using the Helm chart. 
   
4. You have created and published a Docker image for your application  
The Docker Template project provides guidance on [building](../../README.md#build) and [publishing it to the DockerHub registry](../../README.md#build).

5. Your application has a `/live` and `/ready` health check endpoints
  This allows Kubernetes to restart your application if it fails or becomes unresponsive.
  The [@nestjs/terminu](https://github.com/nestjs/terminu) add-on can be used to add health check endpoints.

## Adding the Chart to your Application

In order to add Helm Charts to your application, copy the `nodeapp` directory from this project into your application's root directory.

You then need to make a single change before the charts are usable: to set the `image.repository` for your application.

### Setting the `image.repository` parameter

In order to change the `image.respository` parameter, open the `nodeapp/values.yaml` file and change the following entry:  

```sh
image:
  repository: <namespace>/nodeapp
```
to set `<namespace>` to your namespace on DockerHub where you published your application as `nodeapp`. 

## Configuring the Chart for your Application

The following table lists the configurable parameters of the template Helm chart and their default values.

`livenessProbe` check if pod is in a bad state, will `restart` pod if probe failed
`readinessProbe` check if service in a healthy state, will remove pod from `service/loadbalancer` if probe failed

| Parameter                  | Description                                     | Default                                                    |
| -----------------------    | ---------------------------------------------   | ---------------------------------------------------------- |
| `image.repository`         | image repository                                | `<namespace>/nodeapp`                                      |
| `image.tag`                | Image tag                                       | `latest`                                                   |
| `image.pullPolicy`         | Image pull policy                               | `Always`                                                   |
| `livenessProbe.path`                  | Liveness Probe `path`                | `/live`                                                    |
| `livenessProbe.initialDelaySeconds`   | How long to wait before beginning the checks our pod(s) are up |   30                             |
| `livenessProbe.periodSeconds`         | The interval at which we'll check if a pod is running OK before being restarted     | 10          |
| `livenessProbe.timeoutSeconds`        | if response time is logger than 3 seconds, we consider the check as failed          | 3           |
| `livenessProbe.failureThreshold`      | if check fails for `N` times in a row, we consider the pod is in a bad state, pod will be restarted | 3 |
| `livenessProbe.successThreshold`      | if check succeeds for once, we consider the pod is back to normal | 1                             |
| `readinessProbe.path`                 | Readiness Probe `path`               | `/ready`                                                   |
| `readinessProbe.initialDelaySeconds`  | Start checking after 30s after pod starts. should set to a minimal value such that service able to receive requests as soon as it is ready| `30` |
| `readinessProbe.periodSeconds`        | Readiness Probe `timeoutSeconds`     | `10`                                                       |
| `readinessProbe.timeoutSeconds`       | if response time is logger than 3 seconds, we consider the check as failed          | 3           |
| `readinessProbe.failureThreshold`     | if check fails for `N` times in a row, we consider the pod is in a bad state, pod will be removed from loadbalancer  | 3 |
| `readinessProbe.successThreshold`     | if check succeeds for once, we consider the pod is back to normal | 1                             |
| `service.type`             | Kubernetes service type exposing port                  | `ClusterIP`                                         |
| `service.nodePort`         | The node port used if the service is of type `NodePort`| `""`                                                |
| `service.port`             | TCP Port for this service              | `3000`                                                              |
| `resources`                | CPU, Memory resource limits            | `{}` no default set                                                 |
| `autoscaling.enabled`      | Enable HorizontalPodAutoscaler         | `{}`                                                                |
| `networkPolicy.enabled`    | Enable NetworkPolicy                   | `false`                                                             |
| `ingress.enabled`          | if `true`, an ingress is created       | `false`                                                             |
| `ingress.annotations`      | annotations for the ingress            | `{}`                                                                |
| `ingress.path`             | a list ingress paths                   | `[/]`                                                               |
| `ingress.hosts`            | a list of ingress hosts                | `[ngxapi.example.com]`                                              |
| `ingress.tls`              | a list of [IngressTLS](https://v1-9.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.9/#ingresstls-v1beta1-extensions) items | `[]` |
| `metrics.enabled`          | add prometheus annotations             | `false`                                                             |
 

## Using the Chart to deploy your Application to Kubernetes

In order to use the Helm chart to deploy and verify your applicaton in Kubernetes, run the following commands:

1. From the directory containing `Chart.yaml`, run:  

  ```sh
  helm install --name ngxapi .
  ```  
  This deploys and runs your application in Kubernetes, and prints the following text to the console:  
  
  ```sh
  Congratulations, you have deployed your Node.js Application to Kubernetes using Helm!

  To verify your application is running, run the following two commands to set the SAMPLE_NODE_PORT and SAMPPLE_NODE_IP environment variables to the locaton of your application:

  export SAMPLE_NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services nodeapp-service)
  export SAMPLE_NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  
  And then open your web browser to http://${SAMPLE_NODE_IP}:${SAMPLE_NODE_PORT} from the command line, eg:
  
  open http://${SAMPLE_NODE_IP}:${SAMPLE_NODE_PORT}
  ```
  
2. Copy, paste and run the `export` lines printed to the console
  eg:
  
  ```sh
  export SAMPLE_NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services nodeapp-service)
  export SAMPLE_NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  ```
  
3. Open a browser to view your application:  
  Open your browser to `http://${SAMPLE_NODE_IP}:${SAMPLE_NODE_PORT}` from the command line using:
  
  ```sh
  open http://${SAMPLE_NODE_IP}:${SAMPLE_NODE_PORT}
  ```

You application should now be visible in your browser.


## Uninstalling your Application
If you installed your application with:  

```sh
helm install --name ngxapi .
```
then you can:

* Find the deployment using `helm list --all` and searching for an entry with the chart name "ngxapi".
* Remove the application with `helm delete --purge ngxapi`.
