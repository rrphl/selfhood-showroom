MemberStack.onReady.then(async function(member) {
    if (member.loggedIn) {
        const metadata = await member.getMetaData();
        metadata.saved = metadata.saved || [];
        var saved = metadata.saved;
        console.log(saved);
        if (metadata.saved) {
            $('#iise .saved-item').each(function(element) {
                var link = $(element).closest('.saved-item-info-link');
                console.log(link);
            });
        }
    }
});