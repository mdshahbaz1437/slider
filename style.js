var container = document.querySelector('.container')
var image = ['marvel/1.jpg',
             'marvel/2.jpg',
             'marvel/3.jpg',
             'marvel/4.jpg',
            ]
            var index =0;

            function forward  (){
                index++
                if(index> image.length-1)
                {
                    index = 0;
                }
                container.style.backgroundImage = `url( ${image[index]})`;
            }
            const backWard = () =>{
                index--;
                if(index<0){
                    index = image.length-1;
                }
                container.style.backgroundImage= `url(${image[index]})`
            }