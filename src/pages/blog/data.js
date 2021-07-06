const link = process.env.PUBLIC_URL;
const Data = [
    {
        id: 1,
        tags: [
            'Tech', 'Design', 'Virtual Staging', '3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Tech', 'Design', 'Virtual Staging', '3D Modelling`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-07-06T09:55:38.254Z`
    },
     {
        id: 12,
        tags: [
            'Design', 'Virtual Staging', '3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Design', 'Virtual Staging', '3D Modelling'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe12`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-08-06T09:55:38.254Z`
    }, {
        id: 13,
        tags: [
            'Design', 'Agent Outreach', '3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Design', 'Agent Outreach', '3D Modelling'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe123`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-09-06T09:55:38.254Z`
    }, {
        id: 14,
        tags: [
            'Design', 'Agent Outreach', 'Virtual Staging', 'Tech'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Design', 'Agent Outreach', 'Virtual Staging', 'Tech'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1234`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-10-06T09:55:38.254Z`
    }, {
        id: 15,
        tags: [
            'Tech', 'Virtual Staging', '3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Tech', 'Virtual Staging', '3D Modelling'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe12345`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-07-16T09:55:38.254Z`
    }, {
        id: 16,
        tags: [
            'Tech', 'Virtual Staging', '3D Modelling'
        ],
        title: `'Tech', 'Virtual Staging', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe123456`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-08-16T09:55:38.254Z`
    }, {
        id: 17,
        tags: [
            'Design', 'Tech'
        ],
        title: `'Design', 'Tech'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1234567`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-07-26T09:55:38.254Z`
    }, {
        id: 18,
        tags: [
            'Design', 'Virtual Staging', 'Tech'
        ],
        title: `'Design', 'Virtual Staging', 'Tech'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe12345678`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-08-06T09:55:38.254Z`
    }, {
        id: 19,
        tags: [
            'Design', 'Agent Outreach', '3D Modelling'
        ],
        title: `'Design', 'Agent Outreach', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe123456789`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-08-26T09:55:38.254Z`
    }, {
        id: 11,
        tags: [
            'Design','3D Modelling'
        ],
        img: `${link}/vendor/images/partner.jpg`,
        title: `'Design','3D Modelling'`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe2`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-07-05T09:55:38.254Z`
    }, {
        id: 21,
        tags: [
            'Agent Outreach', '3D Modelling'
        ],
        title: `'Agent Outreach', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe24`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-08-05T09:55:38.254Z`
    }, {
        id: 31,
        tags: [
            'Virtual Staging'
        ],
        title: `'Virtual Staging'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe246`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-06-06T09:55:38.254Z`
    }, {
        id: 41,
        tags: [
            'Agent Outreach'
        ],
        title: `'Agent Outreach'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe2468`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-06-16T09:55:38.254Z`
    }, {
        id: 51,
        tags: [
            '3D Modelling'
        ],
        title: `'3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-09-16T09:55:38.254Z`
    }, {
        id: 61,
        tags: [
            'Design'
        ],
        title: `'Design'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe13`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-01-06T09:55:38.254Z`
    }, {
        id: 71,
        tags: [
            'Design', 'Tech', 'Virtual Staging', '3D Modelling'
        ],
        title: `'Design', 'Tech', 'Virtual Staging', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe135`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2018-01-08T09:55:38.254Z`
    }, {
        id: 81,
        tags: [
            'Tech', 'Agent Outreach', 'Virtual Staging', '3D Modelling'
        ],
        title: `'Tech', 'Agent Outreach', 'Virtual Staging', '3D Modelling'`,
        img: `${link}/vendor/images/partner.jpg`,
        avatar: `${link}/vendor/images/blogger.png`,
        writer: `Jhon Doe1357`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        slug: `${link}`,
        date: `2017-07-09T09:55:38.254Z`
    }
];

const tags = [
    {
        id: '21',
        value: `Tech`
    }, {
        id: '13',
        value: `Design`
    }, {
        id: '14',
        value: `Agent Outreach`
    }, {
        id: '15',
        value: `Virtual Staging`
    }, {
        id: '16',
        value: `3D Modelling`
    }
];

const short = {
    set1: {
        value: `All`,
        text: `All`
    },
    set2: {
        value: `Bathroom 2`,
        text: `Bathroom 2`
    },
    set3: {
        value: `Bathroom`,
        text: `Bathroom`
    },
    set4: {
        value: `Living Room`,
        text: `Living Room`
    },
    set5: {
        value: `Dinning room`,
        text: `Dinning room`
    },
    set6: {
        value: `Bedroom`,
        text: `Bedroom`
    },
    set7: {
        value: `Kitchen`,
        text: `Kitchen`
    }
};

export default Data;
export {tags, short}