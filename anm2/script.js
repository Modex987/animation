$(document).ready(()=>{
  let randomInverser = ()=>{
    return Math.sign(1-2*Math.random())
  }

  $.each($('span'), (i,elm)=>{
    $(`span:nth-of-type(${i+1})`).css({opacity:'0'})
  })

  let moveSpan = (elm)=>{
    elm.css({
      top:`${randomInverser()*Math.random()*1000}px`,
      left:`${randomInverser()*Math.random()*1000}px`,
      opacity:'1'
    })

    elm.animate(
      {top:'0', left:'0'},
      {duration:3000, easing:"easeInOutBounce"},
      ()=>{
        elm.addClass('textShadow')
      }
    )
  }

  $('button').on('click', ()=>{
    $.each($("span"), (i, elm)=>{
      moveSpan($(`span:nth-of-type(${i+1})`))
    })
  })
})