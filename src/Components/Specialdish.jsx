import React from 'react'

const Specialdish = () => {
  return (
    <div className='special-dish'>
    <div className='spl-img'><img alt='' src='https://s3-alpha-sig.figma.com/img/00d8/6c43/8745804358b8628e9063be115bd9fc4e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orjvIm-gGv6APY2ZZwL6HYIQHwYwVCnWudAU8Uyi4H~UGuyqqWXpgbABZ4Tw364osA58crUSbnDCLMNTE-Z5BUeL7TCKbZy-N5A5b~P0nf5U5F12Jr8ISoOlpwSRLhfGpH6oy-OtH0hej-4Xx5uisv8gTELa-SVXnLHyuDyND6C22rSjPW6A03EPzLmfQSEurmNArNU~blQm~KGSTQMlqQ2TmpXnw7mKyKW8flOKeZ0o3szrt2b9pE92ksSrPyUETfWFz907V7itUAcjEWm6bZV6MJN~EFDBKVxGzczlXQpO0bfw0WW7e18PPsT5rEJdyXP1ub3WsujTwQ~78-7p~Q__'/></div>
    <div className='special-text'>
    <p className='spl-tagline'>✦SPECIAL DISH✦</p>
        <h3 className='spl-highlight'>Yukon Fries</h3>
        <p className='spl-description'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim <br/> veniam, quis nostrud </p>
        <p className='price' id='price'> $20.00 <s id='price-cut'>$40.00</s></p>
        <button className='spl-button'>View All Menu</button>
    </div>
    </div>
  )
}

export default Specialdish