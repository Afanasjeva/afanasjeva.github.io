var getFile = function(fileId){
    var cls = [];

    document.getElementById(fileId).onchange = function(){
        var file = this.files[0];

        var reader = new FileReader();
        reader.onload = function(progressEvent){
            var classes = this.result.split('.');
            for(var i = 0; i < classes.length; i++){
                // console.log('classes[',i,']', classes[i]);
                cls[i] = classes[i].split(' ')[0];
                // cls.push(classes[i].split(' ')[0]);
                // console.log('cls[',i,']: ',cls[i]);
                // console.log('-------------');
                console.log(cls[i]);
            }
            console.log(cls.length);
        };
        reader.readAsText(file);
    };

    return cls;
};

var clsForCSS = getFile('file_css');

Array.isArray(clsForCSS);