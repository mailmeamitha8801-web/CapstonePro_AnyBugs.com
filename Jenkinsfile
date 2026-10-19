
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/mailmeamitha8801-web/CapstonePro_AnyBugs.com.git'
                    ]],
                    extensions: [[
                        $class: 'CloneOption',
                        shallow: true,
                        depth: 1,
                        noTags: true,
                        timeout: 20
                    ]]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'allure-results/**, allure-report/**, playwright-report/**', allowEmptyArchive: true
        }
        unsuccessful {
            echo 'Pipeline failed. Check the stage logs for the cause.'
        }
    }
}
