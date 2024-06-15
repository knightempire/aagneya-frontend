    document.addEventListener('DOMContentLoaded', function() {
        const cardContainer = document.getElementById('card-container');

        // Sample data for cards
        const cardData = [
            {
                date: 'Mar 10, 2019',
                time: '12:00pm - 3pm',
                title: 'Accessibility tools for designers and developers',
                details: [
                    { icon: 'bi bi-book', text: 'BTech / MTech' },
                    { icon: 'bi bi-gender-ambiguous', text: 'Male / Female' },
                    { icon: 'bi bi-currency-dollar', text: '10' }
                ],
                extraDetails: [
                    { icon: 'bi bi-people', text: 'Group / Individual' },
                    { icon: 'bi bi-geo-alt', text: 'AB3' },
                    { icon: 'bi bi-award', text: '$10k for top 3' }
                ],
                description: 'Description for the first card.',
                formLink: 'https://example.com/form1'
            },
            {
                date: 'Apr 15, 2019',
                time: '1:00pm - 4pm',
                title: 'Introduction to Web Development',
                details: [
                    { icon: 'bi bi-laptop', text: 'CS / IT' },
                    { icon: 'bi bi-gender-ambiguous', text: 'Male / Female' },
                    { icon: 'bi bi-currency-dollar', text: '15' }
                ],
                extraDetails: [
                    { icon: 'bi bi-people', text: 'Individual' },
                    { icon: 'bi bi-geo-alt', text: 'AB1' },
                    { icon: 'bi bi-award', text: '$5k for top 3' }
                ],
                description: 'Description for the second card.',
                formLink: 'https://example.com/form2'
            },
            {
                date: 'May 20, 2019',
                time: '10:00am - 1pm',
                title: 'Advanced Machine Learning',
                details: [
                    { icon: 'bi bi-cpu', text: 'PhD / MTech' },
                    { icon: 'bi bi-gender-ambiguous', text: 'Male / Female' },
                    { icon: 'bi bi-currency-dollar', text: '20' }
                ],
                extraDetails: [
                    { icon: 'bi bi-people', text: 'Group' },
                    { icon: 'bi bi-geo-alt', text: 'AB5' },
                    { icon: 'bi bi-award', text: '$15k for top 3' }
                ],
                description: 'Description for the third card.',
                formLink: 'https://example.com/form3'
            },
            {
                date: 'Jun 25, 2019',
                time: '2:00pm - 5pm',
                title: 'Cybersecurity Essentials',
                details: [
                    { icon: 'bi bi-shield-lock', text: 'BTech / MTech' },
                    { icon: 'bi bi-gender-ambiguous', text: 'Male / Female' },
                    { icon: 'bi bi-currency-dollar', text: '25' }
                ],
                extraDetails: [
                    { icon: 'bi bi-people', text: 'Individual' },
                    { icon: 'bi bi-geo-alt', text: 'AB4' },
                    { icon: 'bi bi-award', text: '$8k for top 3' }
                ],
                description: 'Description for the fourth card.',
                formLink: 'https://example.com/form4'
            }
        ];

        // Function to create a card element
        function createCard(data) {
            const card = document.createElement('div');
            card.className = 'px-8 py-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 container-glow';

            card.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="date-time-container">
                        <h3>${data.date}</h3>
                        <h4><i class="bi bi-clock icon"></i>${data.time}</h4>
                    </div>
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-purple-600 rounded cursor-pointer hover:bg-violet-500" tabindex="0" role="button">Upcoming</a>
                </div>

                <div class="mt-2">
                    <a href="#" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">${data.title}</a>
                    <div class="mt-2 text-gray-600 dark:text-gray-300">
                        <div class="overflow-x-auto">
                            <table class="min-w-full table-auto">
                                <tbody>
                                    <tr>
                                        ${data.details.map(detail => `
                                            <td class="px-4 py-2">
                                                <div class="td-content">
                                                    <i class="${detail.icon} icon"></i>${detail.text}
                                                </div>
                                            </td>
                                        `).join('')}
                                    </tr>
                                    <tr>
                                        ${data.extraDetails.map(detail => `
                                            <td class="px-4 py-2">
                                                <div class="td-content">
                                                    <i class="${detail.icon} icon"></i>${detail.text}
                                                </div>
                                            </td>
                                        `).join('')}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="toggleReadMore text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</a>
                    <div class="flex items-center">
                        <span class="chess-link font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">
                            Chess
                        </span>
                    </div>
                </div>

                <div class="readMoreContent mt-4 readmore">
                    <p class="desc">${data.description}</p> 
                    <div class="flex items-center justify-between mt-4">
                        <div class="flex items-center">
                            <a href="${data.formLink}" class="font-bold text-violet-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">Form link</a>
                        </div>
                    </div>
                </div>
            `;
            return card;
        }

        // Add cards to the container
        cardData.forEach(data => {
            const card = createCard(data);
            cardContainer.appendChild(card);
        });

        // Handle read more/less functionality
        cardContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('toggleReadMore')) {
                event.preventDefault();
                const readMoreContent = event.target.closest('.px-8').querySelector('.readMoreContent');
                readMoreContent.classList.toggle('open');
                event.target.textContent = readMoreContent.classList.contains('open') ? 'Read less' : 'Read more';
            }
        });
    });
