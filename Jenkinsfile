pipeline {
  agent { dockerfile true }
  stages {
    stage('Setup') {
     steps {
        script {
            sh 'PKG_JSON="$(cat package.json)" && echo "$PKG_JSON" | sed "s#__HOMEPAGE__#$HOME_PAGE#" > package.json'
            if (NPM_HTTPPROXY != '') {
                sh 'npm config set proxy "$NPM_HTTPPROXY"'
            }
            if (NPM_HTTPSPROXY != '') {
                sh 'npm config set https-proxy "$NPM_HTTPSPROXY"'
            }
            sh 'npm install'
        }
      }

    }

    stage('Quality') {
      steps {
        // sh 'npm run sonarqube'
        sh 'npm run quality-check'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        script {
          sshPublisher(
            continueOnError: false, failOnError: true,
            publishers: [
              sshPublisherDesc(
              configName: CREDENTIALNAME_SSH,
              verbose: true,
              transfers: [
                sshTransfer(
                  execCommand: 'sudo rm -rf ${BUILD_DIRECTORY}/*'
                ),
                sshTransfer(
                sourceFiles: "build/**/*",
                removePrefix: "build/",
                remoteRootDir: '/',
                remoteDirectory: '${BUILD_DIRECTORY}',
                )
              ])
            ])
        }
      }
    }
  }
}
