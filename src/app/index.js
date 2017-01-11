app.get('/h/images', function (req, res) {
  fs.readdir(path.join(__dirname, './images'), function (err, files) {
    if (err) return res.send(err);
    var filteredFiles = [];
    files.forEach(function(file) {
      if (file.indexOf('hero') > -1) {
        filteredFiles.push(config.host + '/images/' + file);
      }
    });
    res.send(filteredFiles);
  });
});
