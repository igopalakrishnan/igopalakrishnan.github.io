/* $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  }); */


function autoCarousel() {
    let owlDesigns = $('#owl-designs');
    if (owlDesigns) {
        //owlDesigns.trigger('play.owl.autoplay',[1000]);
        owlDesigns.owlCarousel({
            autoplay: true,
            loop: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            autoplaySpeed: true
        });
    }
}

$(document).ready(function () {
    autoCarousel();
});


function sendMail() {
    let email = 'gokul311098@gmail.com';
    let subject = 'Hire Me!';
    let body = `Hi Gopalakrishnan, %0D%0A %0D%0A
    I am [your name] and I work as a [your job_title] at [Company_name]. I saw your profile on [e.g. LinkedIn or GitHub] and I was really impressed by your experience in [add specific field or an achievement that caught your eye].%0D%0A %0D%0A Here at [Company_name], we are always looking to [e.g. grow or teams with talented people and achieve great things together / collaborate with talented people who’d like to work with one of our clients, like X, Y, Z companies.] %0D%0A %0D%0A [If you’re hiring for a specific role, it’s best to include specific information about the position, e.g. We are currently looking for a [job_title – add link to the job description] to join our team/ work with one of our clients. I’d love to tell you a little more about this position and learn a few things about you, as well.] %0D%0A %0D%0A I’d like to talk to you so I can get to know you better and introduce our company to you.
    Are you available [Include date and time or a period of time, e.g. ‘sometime this week’]? If so, I’d be happy to set up a call. I’m also happy to coordinate via email or LinkedIn, if you prefer.%0D%0A %0D%0AI hope you have a great day.%0D%0A %0D%0ASincerely,%0D%0A %0D%0A[Your name]%0D%0A %0D%0A`


    let mailtoLink = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    window.open(mailtoLink, 'emailWindow');
}

