FROM jboss/keycloak-openshift:4.5.0.Final
LABEL maintainer="Sumanth <xmlking@gmail.com>"

COPY configuration/* $JBOSS_HOME/standalone/configuration/

ENV DB_VENDOR H2
EXPOSE 9080

CMD ["start-keycloak.sh", "-b", "0.0.0.0", "-Dkeycloak.migration.action=import", "-Dkeycloak.migration.provider=dir", "-Dkeycloak.migration.strategy=OVERWRITE_EXISTING","-Dkeycloak.migration.dir=/opt/jboss/keycloak/realm-config", "-Djboss.socket.binding.port-offset=1000"]

