import * as types from '../constant/index'

var initialState = [
    {
        name: 'Hanava',
        singer: 'Camila Cabello, Young Thug',
        path: require('./songs/Camila Cabello Havana Lyrics ft Young Thug.mp3').default,
        image: 'https://upload.wikimedia.org/wikipedia/vi/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png',
        type: ['US-UK']
    },
    {
        name: 'Reality',
        singer: 'Lost Frequencies feat. Janieck Devy',
        path: require('./songs/Reality-Lost-Frequencies-Janieck-Devy.mp3').default,
        image: 'https://i.scdn.co/image/ab67616d0000b273f752bd102113993f7c9429db',
        type: ['US-UK','Running']
    },
    {
        name: 'Heroes Tonight',
        singer: 'Janji, Johnning',
        path: require('./songs/Heroes-Tonight-Janji-Johnning.mp3').default,
        image: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/143/1000x0/heroes-tonight-feat-johnning-1586946923-LsvZKuKHRf.jpg',
        type: ['US-UK','Gaming','Running']
    },
    {
        name: 'Way Back',
        singer: 'Vicetone, Cozi Zuehlsdorff',
        path: require('./songs/Way Back - Vicetone Cozi Zuehlsdorff.mp3').default,
        image: 'https://avatar-nct.nixcdn.com/song/2018/03/09/c/c/3/3/1520561422936_640.jpg',
        type: ['US-UK']
    },
    {
        name: 'Closer',
        singer: 'The Chainsmokers, Halsey',
        path: require('./songs/The Chainsmokers Closer Lyrics ft Halsey.mp3').default,
        image: 'https://i1.sndcdn.com/artworks-000181062702-17yavc-t500x500.jpg',
        type: ['US-UK']
    },
    {
        name: 'All Falls Down',
        singer: 'Alan Walker, Noah Cyrus & Digital Farm Animals',
        path: require('./songs/All Falls Down.mp3').default,
        image: 'https://i1.sndcdn.com/artworks-000545138619-fy7g9m-t500x500.jpg',
        type: ['US-UK']
    },
    {
        name: 'So Far Away',
        singer: 'Martin Garrix  David Guetta',
        path: require('./songs/Martin Garrix  David Guetta  So Far Away Official Video feat Jamie Scott  Romy Dya.mp3').default,
        image: 'https://data.chiasenhac.com/data/cover/72/71105.jpg',
        type: ['US-UK']
    },
    {
        name: 'That Girl',
        singer: 'Olly Murs',
        path: require('./songs/That Girl  Olly Murs.mp3').default,
        image: 'https://avatar-ex-swe.nixcdn.com/song/2018/06/20/7/1/5/3/1529487573799_640.jpg',
        type: ['US-UK']
    },
    {
        name: 'Something Just Like This',
        singer: 'The Chainsmokers & Coldplay',
        path: require('./songs/The Chainsmokers  Coldplay  Something Just Like This.mp3').default,
        image: 'https://data.chiasenhac.com/data/cover/72/71105.jpg',
        type: ['US-UK']
    },
    {
        name: '?????p v??? c??y ????n',
        singer: 'Quang L??',
        path: require('./songs/Dap-Vo-Cay-Dan-Quang-Le.mp3').default,
        image: 'https://m.media-amazon.com/images/I/8113nfM3SXL._SS500_.jpg',
        type: ['Nh???c tr??? t??nh']
    },
    {
        name: '????m bu???n t??nh l???',
        singer: 'Tr?????ng V??',
        path: require('./songs/Dem-Buon-Tinh-Le-Truong-Vu.mp3').default,
        image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/2/8/2830357e17c4d9bdf9f1fb23d3f36cde_1473912122.jpg',
        type: ['Nh???c tr??? t??nh']
    },
    {
        name: 'Ng?????i ??i ngo??i ph???',
        singer: 'Ho??i L??m',
        path: require('./songs/Nguoi-Ngoai-Pho-Hoai-Lam.mp3').default,
        image: 'https://i.scdn.co/image/ab67616d0000b273f7cda5e4bbd96cf0b38fc040',
        type: ['Nh???c tr??? t??nh']
    },
    {
        name: 'V???ng l?? me bay',
        singer: 'Nh?? Qu???nh',
        path: require('./songs/Vung-La-Me-Bay-Nhu-Quynh.mp3').default,
        image: 'https://avatar-ex-swe.nixcdn.com/playlist/2018/10/19/6/7/e/9/1539942251523_500.jpg',
        type: ['Nh???c tr??? t??nh']
    },
    {
        name: 'Con ???????ng x??a em ??i',
        singer: 'L??u ??nh Loan, L?? Sang',
        path: require('./songs/Con-Duong-Xua-Em-Di-Luu-Anh-Loan-Le-Sang.mp3').default,
        image: 'https://s.mxmcdn.net/images-storage/albums5/5/6/2/1/6/9/37961265_500_500.jpg',
        type: ['Nh???c tr??? t??nh']
    },
    {
        name: '??o m???i c?? mau',
        singer: 'D????ng H???ng Loan',
        path: require('./songs/Ao-Moi-Ca-Mau-Duong-Hong-Loan.mp3').default,
        image: 'https://m.media-amazon.com/images/I/71YHKMY784L._SS500_.jpg',
        type: ['Nh???c tr??? t??nh']
    },
    {
        name: 'Nh???t k?? ?????i t??i',
        singer: 'L??u ??nh Loan',
        path: require('./songs/Vung-La-Me-Bay-Nhu-Quynh.mp3').default,
        image: 'https://dt.muvi.vn/mvn/thumbnails/song/2019/10/27/luuanhloanthump_20191027215037.jpg',
        type: ['Nh???c tr??? t??nh']
    },
    {
        name: 'Cheap Thrills',
        singer: 'Sia',
        path: require('./songs/Sia  Cheap Thrills Lyrics.mp3').default,
        image: 'https://i1.sndcdn.com/artworks-000578385494-1tcoaj-t500x500.jpg',
        type: ['Running']
    },
    {
        name: 'I Wanna Go',
        singer: 'Britney Spears',
        path: require('./songs/Britney Spears  I Wanna Go Lyrics.mp3').default,
        image: 'https://upload.wikimedia.org/wikipedia/vi/b/bd/Britney_Spears_-_I_Wanna_Go.jpg',
        type: ['Running']
    },
    {
        name: 'Give Me Everything',
        singer: 'Pitbull',
        path: require('./songs/Pitbull  Give Me Everything ft NeYo Afrojack Nayer  Tradu????oLegendado.mp3').default,
        image: 'https://i1.sndcdn.com/artworks-000354084999-sulq8o-t500x500.jpg',
        type: ['Running']
    },
    {
        name: 'What Makes You Beautiful',
        singer: 'One Direction',
        path: require('./songs/One Direction  What Makes You Beautiful Lyrics.mp3').default,
        image: 'https://file.tinnhac.com/resize/600x-/music/2018/10/31/20181031154908-4ea5.jpg',
        type: ['Running']
    },
    {
        name: 'Play',
        singer: 'K-391-Alan-Walker-Martin-Tungev',
        path: require('./songs/Play-K-391-Alan-Walker-Martin-Tungev.mp3').default,
        image: 'https://i1.sndcdn.com/artworks-000590806844-fd8mbg-t500x500.jpg',
        type: ['Gaming']
    },
    {
        name: 'Want You To Know',
        singer: 'Slushii',
        path: require('./songs/Want-You-To-Know-Slushii.mp3').default,
        image: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/23/f9/8b/23f98b33-7565-4f9f-658e-a34e2de1c6d3/859726336234_cover.jpg/400x400cc.jpg',
        type: ['Gaming']
    },
    {
        name: 'Unity',
        singer: 'TheFatRat',
        path: require('./songs/Unity-TheFatRat.mp3').default,
        image: 'https://i1.sndcdn.com/artworks-nOt146WaqbF5jqfd-6d0nAA-t500x500.jpg',
        type: ['Gaming','Running']
    },
    {
        name: 'Candyland',
        singer: 'Tobu',
        path: require('./songs/Candyland-Tobu.mp3').default,
        image: 'https://i1.sndcdn.com/artworks-000235104044-6tvhrp-t500x500.jpg',
        type: ['Gaming']
    },
    {
        name: 'Sign',
        singer: 'DEAMN',
        path: require('./songs/Sign-DEAMN.mp3').default,
        image: 'https://avatar-ex-swe.nixcdn.com/playlist/2017/10/19/1/9/f/d/1508384494669_500.jpg',
        type: ['Gaming']
    },
    {
        name: 'SummerTime',
        singer: 'K-391',
        path: require('./songs/SummerTime-K-391.mp3').default,
        image: 'https://i1.sndcdn.com/artworks-000198712766-0jvlju-t500x500.jpg',
        type: ['Gaming']
    },
]

export var currentList = initialState.filter((item)=>{
        return item.type.includes('US-UK');
    })
var songList =(state = currentList, action)=>{

    switch(action.type) {
        case types.CHANGE_KIND_OF:
        currentList = initialState.filter((item)=>{
            return item.type.includes(action.kindOf);
        })
            return currentList;
        default:
            return state;
    }
} 

export default songList;