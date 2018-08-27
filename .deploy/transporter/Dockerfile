FROM quay.io/compose/transporter:v0.5.2

WORKDIR /home/transporter
COPY config/* ./

CMD ["transporter" , "run", "-log.level", "debug", "pipeline.js"]
