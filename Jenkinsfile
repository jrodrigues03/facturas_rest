pipeline{

    agent any
    stages{

        stage("descargar el código de la app"){
            steps{
               git "url"
            }

        }

        stage("creación de imagen"){
            steps{
                bat "docker build -t jrodrigues/app1"
            }

        }

        stage("ejecuación del contenedor"){
            steps{
                bat "docker run -d --name app1 -p 8081:8080 jrodrigues/app1 "
            }

        }
        stage("test del servicio"){
            steps {
                echo "Probando el servcio "
            }

        }

         stage("cerrar recursos"){
             steps{
                 bat "docker stop app1"
                 bat "docker container rm app1"
                 bat "docker image rm jrodrigues/app1"
             }
            
        }

    }
}