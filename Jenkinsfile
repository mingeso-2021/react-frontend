
pipeline {
	agent {
		docker { image 'superadmin_react-frontend' }
	}
	environment{
	    scannerHome = tool 'sonar-scanner';
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
		stage('Docker deployment') {
			steps {
				sh 'docker tag superadmin_react-frontend fanunez/frontend-mingeso'
				sh 'docker push fanunez/frontend-mingeso/front'
			}
		}
		stage('End') {
            steps {
                echo "Deploying Backend"
            }
        }
	}
}