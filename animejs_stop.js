// Cancels the animation by the animation object itself
function cancelAnimation(animation){
    let i = anime.running.indexOf(animation);

    animation.paused = true;
    
    anime.running.pop(i);
}

// Cancels the animation by the id of the element the animation is running on
function cancelAnimationById(id){
    for(var i = 0; i < anime.running.length; i++){

        if(id === anime.running[i]["animatables"][0]["target"]["id"]){
            anime.running[i].paused = true;
    
            anime.running.pop(i);
        }
    }
}

// Cancels the animation by the className of the element the animation is running on
function cancelAnimationByClassName(className){
    for(var i = 0; i < anime.running.length; i++){

        if(className === anime.running[i]["animatables"][0]["target"]["className"]){
            anime.running[i].paused = true;
    
            anime.running.pop(i);
        } 
    }
}
