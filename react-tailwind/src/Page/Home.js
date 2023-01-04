import React from 'react'
import logo from '../IMG/arf.png'

const people = [
    {
        name: 'Roti daddy',
        role: 'ลิง',
        imageUrl: 'https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.6435-9/161736426_1114505428995403_1180403870190956022_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHoBHPQsjFeWhXFgGWi1B3JtTpKlA2qdTq1OkqUDap1Or4ecns1R_zVqr9S1vHYb4U9YHl1ReuggH1HJq9FbboD&_nc_ohc=RJxmlDr_QAUAX_oH676&tn=G9h72CtuxvkIOrN-&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfBZK0gh5MKmIbopAyjHiT7f49r771X0eUbM58hQBfvI-w&oe=63DCC5A0',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Peerapol Sesakusai',
        role: 'Artist',
        imageUrl: 'https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/285042753_5384953481564555_4164464841105158791_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHHn-0s5v6w2lOqMKFUwQIdOr1LYDMsIio6vUtgMywiKlFGTVbA44ejLFUEiIzqMp5pdMoKEQjEON-oY49P89b8&_nc_ohc=snrjwZ7Ggs8AX_4NncA&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfCUPpKmhU0ruuwkCNbjmikgF63fXNtYbHy20k4HZ0Htpw&oe=63BA493E',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'NoonAfter',
        role: 'Homosapien',
        imageUrl: 'https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.6435-9/197402290_1257691261312560_155569732166813326_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGZx6wqlQ2BNHXr_nA00R8xHHN5Hvr4hCocc3ke-viEKmAP5bzrp-gQdHV05_4w-DV9nskhnahOenvOAtUrwEMJ&_nc_ohc=dKHggNBCLBsAX_QjYHg&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfBRiAuJGEFhi7yj0bpGaJBlrAFPhfuVa2fFUvtUfwUhNQ&oe=63DCA0FD',
        twitterUrl: '#',
        linkedinUrl: '#',
    }, {
        name: 'Golden daisy',
        role: 'Homosapien',
        imageUrl: 'https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-1/298116847_2502550526554723_7002077453449848099_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFIrfE3ptmKI5EK5LIsIYGavpsRFoMJLle-mxEWgwkuV9vhBxM6lV16Bmh6RUWUYMJ_rKn9KzPvhCB-MhhLmwsW&_nc_ohc=0i4AaM1ylDUAX8qBqjT&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfA1HNMP5aKvTjpP1rqxH6vL8y-EEyfbhxeVC2H_RuYDLA&oe=63B9767A',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'BIG APE',
        role: 'Homosapien',
        imageUrl: 'https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/320947794_471646368466247_7970674750603469919_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFlgKgx9UK-NRCKR_9E2GoGp2T_iceIKy6nZP-Jx4grLnbPxVq3TLuZVGO-GmbstkGvcNj3RGHz6SEeBcD5mfmx&_nc_ohc=Fmn_Ed-fmNYAX-i-Z5T&_nc_ht=scontent.fbkk6-1.fna&oh=00_AfDxgvgBCTKYgz8yT67brS6uazGMLayjt24dNgygolIJzA&oe=63BA366D',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'BIG APE',
        role: 'Homosapien',
        imageUrl: 'https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/214511978_1183287742117171_7119066604150464841_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEgmdPz21xY1WYmfI28K3t6B_xhYrefla8H_GFit5-Vr__nH5TQLLPYAQqLFswIoeZefjftaM5RQiTwlowb43e8&_nc_ohc=XjPE_LmwztMAX8ApTnx&_nc_ht=scontent.fbkk6-1.fna&oh=00_AfBWXdK5ZWtVORSrMdywY87NAEabIcZ4XMrAPbxSMRzFIw&oe=63BAB495',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    // More people...
]

const Home = () => {
    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24'>
                <div className='space-y-12'>
                    <div className='spance-y-5 sm:space-y-4 md:max-w-3xl xl:max-w-none'>
                        <h2 className='text-3xl font-bold tracking-tighr sm:text-4xl'>
                            This are our people
                        </h2>
                        <p>
                            Weirdest society
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className='space-y-4'>
                                    <div className='aspect-w-3 aspect-h-2'>
                                        <img className='rounded-lg object-cover shadow-lg' src={person.imageUrl} alt="" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className='space-y-1 text-lg font-medium leading-6'>
                                            <h3>
                                                {person.name}
                                            </h3>
                                            <p className='text-indigo-600'>{person.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home