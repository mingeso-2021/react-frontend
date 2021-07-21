
pipeline {
	agent any
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
		stage('End') {
            steps {
                echo "Deploying Backend"
            }
        }
	}
}