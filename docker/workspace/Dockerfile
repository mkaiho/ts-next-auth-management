FROM node:hydrogen-bullseye

RUN apt-get update && apt-get install -y vim jq

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
  && unzip awscliv2.zip \
  && rm awscliv2.zip \
  && ./aws/install \
  && rm -r ./aws \
&& curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL \
&& curl -L -o direnv https://github.com/direnv/direnv/releases/download/v2.29.0/direnv.linux-amd64 \
  && chmod +x direnv \
  && mv direnv /usr/local/bin/ \
  && echo 'eval "$(direnv hook bash)"' >> /root/.bashrc

WORKDIR /work/ts-next-auth-management
