node {
    try {

        stage('git source Pull') {
            checkout scm
        }

        stage("Docker Image Delete") {
            sh(script: "docker stop ${IMAGE_NAME} || true")
            sh(script: "docker rm ${IMAGE_NAME} || true")
            sh(script: "docker rmi ${IMAGE_NAME} || true")

        }

        stage("Docker Image build") {
            sh(script: "docker build -t ${IMAGE_NAME} .")
        }

        stage("Docker Image run") {
            sh(script: "docker run -d --name ${IMAGE_NAME} -p 3000:3000 -v /app/node_modules -v /app:/app ${IMAGE_NAME}")
        }

    }catch(e) {

    }
}