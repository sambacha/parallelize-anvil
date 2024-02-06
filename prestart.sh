#!/bin/bash

export CARGO_HTTP_CAINFO="$PWD/devssl-ca.pem"
export CGI_HTTP_PROXY="http://127.0.0.1:9090"
export CURL_CA_BUNDLE="$PWD/devssl-ca.pem"
export GIT_SSL_CAINFO="$PWD/devssl-ca.pem"
export GLOBAL_AGENT_HTTP_PROXY="http://127.0.0.1:9090"
export HTTPS_PROXY="http://127.0.0.1:9090"
export HTTP_PROXY="http://127.0.0.1:9090"
export NODE_EXTRA_CA_CERTS="$PWD/devssl-ca.pem"
export NODE_OPTIONS="--require \"/Applications/Proxyman.app/Contents/Frameworks/ProxymanCore.framework/Versions/A/Resources/overrides/js/js.min.js\""
export NODE_TLS_REJECT_UNAUTHORIZED="0"
export PATH="$PWD/path:$PATH"
export PERL_LWP_SSL_CA_FILE="$PWD/devssl-ca.pem"
export ANVIL_INJECTION_ACTIVE=true
export PROXYMAN_INJECTION_OVERRIDE_PATH="/Applications/Proxyman.app/Contents/Frameworks/ProxymanCore.framework/Versions/A/Resources/overrides"
export PYTHONPATH="/Applications/Proxyman.app/Contents/Frameworks/ProxymanCore.framework/Versions/A/Resources/overrides/python"
export REQUESTS_CA_BUNDLE="$PWD/devssl-ca.pem"
export SSL_CERT_FILE="$PWD/devssl-ca.pem"
export http_proxy="http://127.0.0.1:9090"
export https_proxy="http://127.0.0.1:9090"
export npm_config_https_proxy="http://127.0.0.1:9090"
export npm_config_proxy="http://127.0.0.1:9090"
export npm_config_scripts_prepend_node_path=false
clear


echo "⭐️"
