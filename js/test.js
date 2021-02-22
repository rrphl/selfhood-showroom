MemberStack.onReady.then(async function(member) {
    if (member.loggedIn) {
        const metadata = await member.getMetaData();
        metadata.saved = metadata.saved || [];
        var saved = metadata.saved;
        console.log(saved);
        if (metadata.saved) {
            document.querySelectorAll("#iise-delivery-1 .saved-item .saved-item-name").forEach(function(element) {
                var link = $(element).closest(".saved-item-info-link");
                var url = (new URL(link[0].href)).pathname;
                var exists = metadata.saved.indexOf(url);
                if (exists !== -1){$(element).closest(".saved-item").css("display","flex");}
            });
        }
    }
});