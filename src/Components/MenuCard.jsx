import React from 'react'

const MenuCard = () => {
  return (
    <div className='menu-container'>
    <div className='text'>
    <p className='tagline'>✦FLAVORS FOR ROYALTY✦</p>
        <h3 className='highlight'>We Offer Top Notch</h3>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad <br/> minim veniam,</p>
    </div>
        <div className='menu-cards'>
        <div className='menu-card'>
            <div className='image-container'>
                <img alt='' src='https://s3-alpha-sig.figma.com/img/0aa4/4e15/a932df5081e34e50d7db08ac3ac54615?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i5QmXAsVlfPVb-7iTaLapQ6Vff~mFaCegYN92jqLNpePDK0QlmwYRv5FjF8CdjYa1PzysheQjJ0b4LfBLtKY~GrdxtiEhpnmtN-8dJoiPtU7CA9kx8lCEMXPE--B7cm11JNFVbPIhA4AohjpjC0J5weV6vmwDXLeAn1wk2hjEqlt4J-RDbYPYjWQne9uSRByQmb5865itBGvC~gg5VQMjVE4U597mHb6~KPQA5ub4x~oqxoVQfr25dQDF9VKZ5BDw0cg-CZIMhegLZdSME3H1sBazcjXX0G7hJUuhedMgoC13laXeFXeK6~8n3QGumGLNA5wLwFDRB609OY5ks9sfQ__'/>
            </div>
            <h6 className='menu-item'>Burgers</h6>
                <p className='view'>View Menu</p>
        </div>
        <div className='menu-card' id='fries'>
        <div className='image-container' >
                <img alt='' src='https://s3-alpha-sig.figma.com/img/2535/1cda/b06930ed3d33deda2ba6f0ffcbcb87e9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B14NFZv66e1W3Cn53cFdlZlr06pm~QdVCY39b-DeASLsdCCJ6h~6pUomYkjOE~4L2tEbg9jMBJOsyme3HyjAeXDnvYJebLUgy5mqRAx9GGeCFhbyHQAGVLh~Ptk2z0NudvJ2pVknLAUao5QgonQh5D4qsati0bohqKGBOMtS722fnHjIcBDzDvALcNi--1gDrOzPcRm2F0Acn~S5rOogzlu6fwj290cMNNdEkggxzqVXLzM7bTON3rPYlDgrGYImy3EsrvmZOxCk72jeFDM8BuW4XrxddxEVVxB7fiTaHfw1yLrmjvQFqwVrBrP-~ecLrLauqrgQ5YvK2Pq7li3ZrA__'/>
            </div>
            <h6 className='menu-item'>Fries</h6>
                <p className='view'>View Menu</p>
        </div>
        <div className='menu-card'>
        <div className='image-container'>
                <img alt='' src='https://s3-alpha-sig.figma.com/img/fa57/7a93/3a3c17e0666c691146fe5924ac499624?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyF3CoexFMMEjwI71s8OpE7y4h88VSs0EF7tScZrfMD2hR7zMWvBJQL0bEVzqx8jeayPBOY~JSptlkxoPB7Ht7A4xHelt764QvLlPzsZ0iSbbTDcUxgj7LGUXvZNtBlXT98X67FfyAmvV5hjACpIwco~xe0cU~PyVYNMCYgEMquDPdeDpcfeVHrSs7ntFlC~g360LfbJ0OYjzMm1i6r2puU6uQKposIDATXfFB9YsvoIL7kOOA3rhwjA78OgE2VkzNoPqp5nftAsLf3lh2J1grgz6kOEKZbjQdV4xLawre-wdykU7O2cCgxKKd7Kj6OGlmrugKmsKTNE2jgd3lnGtA__'/>
            </div>
            <h6 className='menu-item'>Coffee</h6>
                <p className='view'>View Menu</p>
        </div>
        </div>
    </div>
  )
}

export default MenuCard