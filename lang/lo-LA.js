export default {
  welcome: 'Welcome',
  navbar: [
    {
      id: uuidv4,
      title: 'ໜ້າທຳອິດ',
      link: '',
      pageid: 'Home'
    },
    {
      id: uuidv4,
      title: 'ການບໍລິການ',
      link: '/services',
      pageid: 'service'
    },
    {
      id: uuidv4,
      title: 'ຄັງສິນຄ້າ',
      link: '/products',
      pageid: 'products'
    },
    {
      id: uuidv4,
      title: 'ຕິດຕໍ່ພວກເຮົາ',
      link: '/contact',
      pageid: 'contact'
    },
    {
      id: uuidv4,
      title: 'ກ່ຽວກັບ',
      link: '/about-us',
      pageid: 'about-us'
    }
  ]
}

function uuidv4 () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}
