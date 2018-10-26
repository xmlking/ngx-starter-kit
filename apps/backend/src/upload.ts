import { IncomingForm } from 'formidable';

const path = require('path');
const fs = require('fs');
const uploadDir = path.join(path.resolve(__dirname), 'uploads');

if (!fs.existsSync(uploadDir)) {
  console.log('making uploadDir...');
  fs.mkdirSync(uploadDir);
}

function setupForm(form) {
  form.type = 'multipart';
  form.multiples = true;
  form.encoding = 'utf-8';
  form.maxFieldsSize = 52428800;
  form.uploadDir = uploadDir;
  form.keepExtensions = true;
}

export default function upload(req, res) {
  const form = new IncomingForm();

  setupForm(form);

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    fs.renameSync(file.path, path.join(form.uploadDir, file.name));
  });

  form.on('end', () => {
    res.status(204).json({ message: 'success' });
  });

  form.on('error', err => {
    console.log('An error has occured: \n' + err);
  });

  form.parse(req);
}
