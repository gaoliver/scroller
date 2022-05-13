var root = document.documentElement
var section = document.getElementById('first_section')
var copySection = document.createElement('section')
var content = document.getElementById('content')
var paragraphs = document.getElementsByTagName('p')

copySection.id = 'first_section_copy'
copySection.innerHTML = section.innerHTML
copySection.classList.add('header')

content.children[content.children.length - 1].classList.add('last_paragraph')

document.body.appendChild(copySection)

function changeFormat() {
  var aspectRatio = window.screen.height / window.screen.width

  for (let index = 0; index < paragraphs.length; index++) {
    const element = paragraphs[index]
    if (aspectRatio <= 1) {
      element.classList.add('desktop_paragraph')
    } else {
      element.classList.remove('desktop_paragraph')
    }
  }
}

function generateColor() {
  let color = ''
  for (let index = 0; index < 6; index++) {
    color += Math.floor(Math.random() * 10)
  }

  return color
}

function onStart() {
  root.style.setProperty('---header-color', `#${generateColor()}`)
  changeFormat()
}

function scrollFunction() {
  var screenPosition = window.scrollY

  if (
    screenPosition > content.offsetTop - 20 &&
    screenPosition < content.offsetTop + 20
  ) {
    root.style.setProperty('---header-color', `#${generateColor()}`)
  }

  if (copySection.offsetTop <= screenPosition) {
    window.scrollTo(0, 0)
    console.warn('Back to begining!')
  }
}
