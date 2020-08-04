MemberStack.onReady.then(async function(member) {
    if (member.loggedIn) {
        const metadata = await member.getMetaData();
        metadata.saved = metadata.saved || [];
        var saved = metadata.saved;
        console.log(saved);
        if (metadata.saved) {
            var iise = document.querySelector("#iise");
            iise.querySelectorAll(".brands-item").forEach(function(element) {
                var link = element.querySelector(".saved-item-info-link");
                console.log(link);
            });
        }
    }
});