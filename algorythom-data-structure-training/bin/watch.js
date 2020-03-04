const nodemon = require('nodemon');
const exec = require('child_process').exec;

nodemon({
  exec: 'echo "\n--- LEARN ALGORYTHOM DATA AND DATA STRUCTURE ---\n"',
  watch: './dist',
});

nodemon
  .on('start', () => {
    console.log('\n');
  })
  .on('restart', files => {
    files.forEach(file => {
      console.log(`Restart ${file} at ${Date.now()}.`);
    });
    exec(`node ${files[0]}`, (err, stdout) => {
      console.log(stdout);
    });
  });
