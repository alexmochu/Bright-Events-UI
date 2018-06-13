import $ from 'jquery'; 

export const Notifications = () => {
    window.setTimeout(function(){
        $('.semantic-message').addClass('animated fadeOut').remove();
    }, 3000);
};