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
      const paths = file.split('/');
      console.log(`Run ${paths[paths.length - 1]} at ${new Date().toString()}.`);
    });
    exec(`node ${files[0]}`, (err, stdout) => {
      console.log(stdout);
    });
  });
