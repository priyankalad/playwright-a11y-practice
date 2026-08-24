pipeline{
    agent any
    stages{
        stage('Install dependencies'){
            steps{
                sh 'npm ci'
            }
        }
        stage('Build React App'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Run playwright test'){
            steps{
                sh 'npx playwright install chromium'
                sh 'npx playwright test'
            }
        }
    }

    post{
        always {
            archiveArtifacts(
                artifacts:'playwright-report/**',
                allowEmptyArchive: true
            )
        }
    }
}