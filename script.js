// your code here
 const bands = [
            'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
            'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
            'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
        ];

        // Function to strip 'a', 'an', and 'the' from the beginning of strings
        function stripArticles(bandName) {
            return bandName.replace(/^(a |an |the )/i, '').trim();
        }

        // Sort the bands array by ignoring the articles
        const sortedBands = bands.sort((a, b) => stripArticles(a).localeCompare(stripArticles(b)));
     console.log(sortedBands);
        // Reference to the UL element
        const bandList = document.getElementById('band');

        // Populate the UL with the sorted bands
        sortedBands.forEach(band => {
            const li = document.createElement('li');
            li.textContent = band;
            bandList.appendChild(li);
        });