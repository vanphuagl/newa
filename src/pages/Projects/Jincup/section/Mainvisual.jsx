import React from 'react'

/* ---------------------------------- image --------------------------------- */
import mainvisualImg from 'src/pages/Projects/Jincup/img/mainvisual.webp'
import mainvisualSpImg from 'src/pages/Projects/Jincup/img/mainvisual_sp.webp'

import styles from '../styles/mainvisual.module.scss'

const Mainvisual = () => {
  return (
    <section className={styles.mainvisual} id='mainvisual'>
      <div className={styles.mainvisualContainer}>
        <div className={styles.mainvisualImg}>
          <picture>
            <source media='(max-width:1023px)' srcSet={mainvisualSpImg} />
            <img src={mainvisualImg} alt='未来の ジンカップを 考える。' loading='lazy' />
          </picture>
        </div>

        <div className={styles.mainvisualLogo}>
          <div className={styles.logo}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='119.64'
              height='131.253'
              viewBox='0 0 119.64 131.253'
              role='img'
              aria-label='jincup x anew inc.'
            >
              <defs>
                <clipPath id='clip-path-mainvisual'>
                  <rect id='Rectangle_36' data-name='Rectangle 36' width='118.778' height='63.578' fill='#fff' />
                </clipPath>
              </defs>
              <g id='logo' transform='translate(-1273.479 -653)'>
                <g id='Group_127' data-name='Group 127' transform='translate(1274.341 653)'>
                  <g id='Group_126' data-name='Group 126' transform='translate(0 0)' clipPath='url(#clip-path-mainvisual)'>
                    <path
                      id='Path_305'
                      data-name='Path 305'
                      d='M2.549,49.8c-.624-.266-2.7-3-2.541-3.848.264-1.461.8-1.978,2.792-1.731,1.919.231,4.527,1.559,6.816,1.97,6.505,1.15,11.54-1.007,16.039-4.875,6-5.149,12.833-15.963,14.4-20.838s1.919-5.64,4.263-3.414,9.165,4.018,12.467-2.67,4.709-3.523,5.626-2.283C63.281,13.3,74.2,31.458,83.839,37.986c.36.248,1.763-.237,2.893-.949,0,0,3.394-1.978,6.937-3.807a13.387,13.387,0,0,1,9.05-1.418,18.71,18.71,0,0,1,9.026,5.556c3.265,3.308,4.75,7.447,6.188,10.687.964,2.154,1.362,3.333-.231,3.84-1.823.571-3.185.421-5.526-4.7a19.994,19.994,0,0,0-3.468-5.521c-1.772-1.87-2.5-3.044-5.7-3.787a15.611,15.611,0,0,0-8.49.845c-1.978.749-2.8,1.794-4.963,3.541a26.415,26.415,0,0,1-3.108,2.547,4.557,4.557,0,0,1-4.388.284c-1.945-.976-4.791-4.008-8.154-7.444A86.345,86.345,0,0,1,62.346,23.071c-2.117-3.285-2.293-6.094-3.754-4.179s-3.94,5.785-8.782,5.364c-3.2-.278-3.7-.378-4.656-1.184s-1.391,1.123-1.878,2.606a53.717,53.717,0,0,1-4.47,9.533c-1.731,2.539-5.331,8.731-9.386,11.845A25.973,25.973,0,0,1,14.253,52.83a25.237,25.237,0,0,1-7.8-1.158,29.021,29.021,0,0,1-3.9-1.874'
                      transform='translate(0 10.743)'
                      fill='#fff'
                    />
                    <path
                      id='Path_306'
                      data-name='Path 306'
                      d='M16.412,6.456c.368-1.837,1.232-4.936,3.433-3.371,2.185,1.571,3.639,3.044,3.523,5.757s0,5.1-1.892,4.486S17.627,12.1,16.8,10.41a7.419,7.419,0,0,1-.391-3.954'
                      transform='translate(17.048 2.778)'
                      fill='#fff'
                    />
                    <path
                      id='Path_307'
                      data-name='Path 307'
                      d='M28.664,5.31c-.483-1.622-1.127-4.544.423-5.086S32.056.016,32.86,2.479s2.612,5.391,1.89,6.133-2.825,1.43-3.465.992A7.1,7.1,0,0,1,29.3,6.988c-.407-.97-.638-1.678-.638-1.678'
                      transform='translate(29.397 0)'
                      fill='#fff'
                    />
                  </g>
                </g>
                <path
                  id='Path_335'
                  data-name='Path 335'
                  d='M15.588,4.435a3.642,3.642,0,0,1-1.848.394,2.216,2.216,0,0,1-1.591-.56,2.436,2.436,0,0,1-.591-1.833A6.161,6.161,0,0,1,9.089,4.268a8.161,8.161,0,0,1-3.045.56A8.157,8.157,0,0,1,4.03,4.586a4.685,4.685,0,0,1-1.651-.757A3.635,3.635,0,0,1,1.273,2.481,4.536,4.536,0,0,1,.864.466a4.6,4.6,0,0,1,.454-2.181,3.965,3.965,0,0,1,1.2-1.378,5.483,5.483,0,0,1,1.7-.8q.954-.273,1.954-.454,1.06-.212,2.015-.318a11.224,11.224,0,0,0,1.681-.3,2.8,2.8,0,0,0,1.151-.576,1.405,1.405,0,0,0,.424-1.106,2.57,2.57,0,0,0-.318-1.363A2.182,2.182,0,0,0,10.3-8.8,3.326,3.326,0,0,0,9.18-9.168a8.466,8.466,0,0,0-1.227-.091,5.446,5.446,0,0,0-2.727.621A2.636,2.636,0,0,0,4.045-6.29H1.47a5.563,5.563,0,0,1,.606-2.454A4.594,4.594,0,0,1,3.53-10.365a6.1,6.1,0,0,1,2.075-.894,10.961,10.961,0,0,1,2.5-.273,14.661,14.661,0,0,1,2.106.151,5.5,5.5,0,0,1,1.894.621,3.63,3.63,0,0,1,1.363,1.318,4.218,4.218,0,0,1,.515,2.212V.83a6.027,6.027,0,0,0,.106,1.333q.106.424.712.424a2.55,2.55,0,0,0,.788-.151ZM11.407-3.594a3.205,3.205,0,0,1-1.272.53q-.788.167-1.651.273t-1.742.242a6.4,6.4,0,0,0-1.575.439,2.866,2.866,0,0,0-1.136.863A2.418,2.418,0,0,0,3.591.284,2.094,2.094,0,0,0,3.848,1.36a2.147,2.147,0,0,0,.667.712,2.8,2.8,0,0,0,.954.394,5.3,5.3,0,0,0,1.151.121A6.1,6.1,0,0,0,8.8,2.238a4.588,4.588,0,0,0,1.485-.879A3.466,3.466,0,0,0,11.134.209a2.912,2.912,0,0,0,.273-1.166Zm6.271-7.574V4.5h2.575V-4.351a6.345,6.345,0,0,1,.288-1.954,4.438,4.438,0,0,1,.863-1.56A3.835,3.835,0,0,1,22.844-8.9a5.248,5.248,0,0,1,2.045-.364,3.152,3.152,0,0,1,2.333.848,3.111,3.111,0,0,1,.848,2.3V4.5h2.575v-10.3a9.692,9.692,0,0,0-.258-2.318,4.389,4.389,0,0,0-.894-1.8,4.234,4.234,0,0,0-1.666-1.182,6.8,6.8,0,0,0-2.575-.424,5.422,5.422,0,0,0-5.09,2.848H20.1v-2.484ZM44.491-4.836h-9a5.364,5.364,0,0,1,.394-1.712A4.566,4.566,0,0,1,36.8-7.956a4.163,4.163,0,0,1,1.378-.954,4.484,4.484,0,0,1,1.8-.348,4.405,4.405,0,0,1,1.772.348,4.459,4.459,0,0,1,1.394.939,4.414,4.414,0,0,1,.939,1.409A5.269,5.269,0,0,1,44.491-4.836ZM46.975-.473H44.43a3.662,3.662,0,0,1-1.378,2.3,4.457,4.457,0,0,1-2.681.757,5.334,5.334,0,0,1-2.212-.424,4.335,4.335,0,0,1-1.545-1.136,4.426,4.426,0,0,1-.879-1.636,6.217,6.217,0,0,1-.242-1.954H47.217a12.47,12.47,0,0,0-.258-3,8.682,8.682,0,0,0-1.151-2.908,6.86,6.86,0,0,0-2.212-2.2,6.426,6.426,0,0,0-3.469-.863,7.123,7.123,0,0,0-2.954.606,6.942,6.942,0,0,0-2.333,1.7,7.82,7.82,0,0,0-1.53,2.575,9.425,9.425,0,0,0-.545,3.272,12.555,12.555,0,0,0,.53,3.3A7.207,7.207,0,0,0,34.7,2.526a6.42,6.42,0,0,0,2.318,1.7,8.045,8.045,0,0,0,3.257.606A7.11,7.11,0,0,0,44.7,3.5,6.259,6.259,0,0,0,46.975-.473ZM65.395,4.5l5-15.663H67.728L64.213,1.648h-.061L60.881-11.168H58.063L54.912,1.648h-.061L51.307-11.168H48.459L53.489,4.5h2.787L59.427-7.956h.061L62.668,4.5ZM82.179-13.985v-3.151H79.6v3.151ZM79.6-11.168V4.5h2.575V-11.168Zm5.665,0V4.5h2.575V-4.351a6.345,6.345,0,0,1,.288-1.954A4.438,4.438,0,0,1,89-7.865,3.835,3.835,0,0,1,90.435-8.9a5.249,5.249,0,0,1,2.045-.364,3.152,3.152,0,0,1,2.333.848,3.111,3.111,0,0,1,.848,2.3V4.5h2.575v-10.3a9.693,9.693,0,0,0-.258-2.318,4.389,4.389,0,0,0-.894-1.8,4.234,4.234,0,0,0-1.666-1.182,6.8,6.8,0,0,0-2.575-.424,5.422,5.422,0,0,0-5.09,2.848h-.061v-2.484Zm26.57,5.029h2.666a6.19,6.19,0,0,0-.727-2.409,5.376,5.376,0,0,0-1.469-1.681,6.087,6.087,0,0,0-2.06-.985,9.466,9.466,0,0,0-2.5-.318,7.582,7.582,0,0,0-3.242.651,6.47,6.47,0,0,0-2.318,1.787,7.6,7.6,0,0,0-1.379,2.666,11.494,11.494,0,0,0-.454,3.287,10.554,10.554,0,0,0,.47,3.227,7.076,7.076,0,0,0,1.394,2.53,6.14,6.14,0,0,0,2.3,1.636,8.159,8.159,0,0,0,3.166.576,6.805,6.805,0,0,0,4.741-1.575A7.213,7.213,0,0,0,114.6-1.231H111.96a4.515,4.515,0,0,1-1.318,2.818,4.214,4.214,0,0,1-2.984,1,4.264,4.264,0,0,1-2.09-.485A4.068,4.068,0,0,1,104.144.814a5.685,5.685,0,0,1-.8-1.833,8.711,8.711,0,0,1-.258-2.121,10.654,10.654,0,0,1,.242-2.287,5.736,5.736,0,0,1,.8-1.954,4.159,4.159,0,0,1,1.5-1.363,4.8,4.8,0,0,1,2.333-.515,3.909,3.909,0,0,1,2.605.818A3.925,3.925,0,0,1,111.839-6.138Zm5.3,7.271V4.5H120.5V1.133Z'
                  transform='translate(1272.615 779.424)'
                  fill='#fff'
                />
                <g id='Group_128' data-name='Group 128' transform='translate(1327.398 732.977)'>
                  <line
                    id='Line_14'
                    data-name='Line 14'
                    x1='11.801'
                    y2='11.801'
                    transform='translate(0 0)'
                    fill='none'
                    stroke='#fff'
                    strokeWidth={1}
                  />
                  <line
                    id='Line_15'
                    data-name='Line 15'
                    x2='11.801'
                    y2='11.801'
                    transform='translate(0 0)'
                    fill='none'
                    stroke='#fff'
                    strokeWidth={1}
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mainvisual
