
pipeline {
	agent any
	environment{
	    scannerHome = tool 'sonar-scanner';
		DOCKERHUB_CREDENTIALS = credentials('fanunez-dockerhub');
	}
	stages {
        stage('Init') {
            steps {
                echo "Init"
            }
        }
		stage('SonarQube analysis') {
    			steps {
				echo "sonarqube with Frontend"
				dir("/var/lib/jenkins/workspace/dev-frontend"){
				    withSonarQubeEnv('sonarqube') { // Will pick the global server connection you have configured
                        sh "${scannerHome}/bin/sonar-scanner"
                   	}
				}
			}
  		}
		stage('Docker Build'){
            steps{
                dir("/var/lib/jenkins/workspace/dev-frontend"){
                    sh 'docker build -t fanunez/frontend-mingeso .'
                }
            }
        }
        stage('Login'){
            steps{
                sh  'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Docker Hub'){
            steps{
                dir("/var/lib/jenkins/workspace/dev-frontend"){
                    sh 'docker push fanunez/frontend-mingeso'
                }
            }
		}
		stage('End') {
            steps {
                echo "Deploying Backend"
            }
        }
	}
	post {
		always {
			sh 'docker logout'
		}
	}
}