/**
 * The Config Team Overrides to remove some elements from the Account page
 * This is not an ideal solution and we wish we could have done it through config,
 * but we have not found a way to do that yet.
 */

$(document).ready(function () {
    // If URL is not /account/, return early
    if (window.location.pathname != "/account/") {
        return;
    }

    function removeDivsByH6Title(titlesToRemove) {
        //get all input containers, then filter by their titles.
        const targetDivs = document.querySelectorAll(
            ".pgn-transition-replace-group.position-relative"
        );

        targetDivs.forEach((div) => {
            const h6Element = div.querySelector("h6");
            if (h6Element) {
                const h6Text = h6Element.textContent.trim();
                if (titlesToRemove.includes(h6Text)) {
                    div.remove();
                }
            }
        });
    }

    const titlesToDelete = ["Facebook", "Twitter", "Education", "Year of birth"];
    removeDivsByH6Title(titlesToDelete);
});
