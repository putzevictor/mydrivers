var DNVmodify = ''
var elementsCountDrivers = 0
      function addDriver(documentNumberValue,driverName,surname,visitedCountries){
        if(!isNaN(documentNumberValue)||!isNaN(driverName)||!isNaN(surname)||!isNaN(visitedCountries)){
          return false
        }else{
          document.getElementById("createModalClose").click()
          let drivers = document.getElementById("driversContainer")
          const newLi = document.createElement("div")
          const form = document.getElementById("createDriverForm")
          let userImage = document.createElement("img")
          let divItem = document.createElement("div")
          let divTranslationName = document.createElement("div")
          let DNV = documentNumberValue
          //divTranslationName.setAttribute("lng-tag","nameDriverCard")
          userImage.src = "https://w7.pngwing.com/pngs/39/283/png-transparent-user-user-people-linear-icon-user-infographic-people-monochrome.png"
          let nameValue = document.createTextNode(driverName)
          divTranslationName.append(nameValue)
          let dnValue = document.createTextNode("ID: "+DNV)
          let deleteSVG = document.createElementNS("http://www.w3.org/2000/svg","svg")
          let deletePath = document.createElementNS("http://www.w3.org/2000/svg","path")
          let deleteButton = document.createElement("button")
          deleteSVG.setAttribute("viewBox","0 0 20 20")
          deleteSVG.setAttribute("class","h-6 w-6 fill-black hover:bg-orange-600")
          deletePath.setAttribute("d", "M16.588,3.411h-4.466c0.042-0.116,0.074-0.236,0.074-0.366c0-0.606-0.492-1.098-1.099-1.098H8.901c-0.607,0-1.098,0.492-1.098,1.098c0,0.13,0.033,0.25,0.074,0.366H3.41c-0.606,0-1.098,0.492-1.098,1.098c0,0.607,0.492,1.098,1.098,1.098h0.366V16.59c0,0.808,0.655,1.464,1.464,1.464h9.517c0.809,0,1.466-0.656,1.466-1.464V5.607h0.364c0.607,0,1.1-0.491,1.1-1.098C17.688,3.903,17.195,3.411,16.588,3.411z M8.901,2.679h2.196c0.202,0,0.366,0.164,0.366,0.366S11.3,3.411,11.098,3.411H8.901c-0.203,0-0.366-0.164-0.366-0.366S8.699,2.679,8.901,2.679z M15.491,16.59c0,0.405-0.329,0.731-0.733,0.731H5.241c-0.404,0-0.732-0.326-0.732-0.731V5.607h10.983V16.59z M16.588,4.875H3.41c-0.203,0-0.366-0.164-0.366-0.366S3.208,4.143,3.41,4.143h13.178c0.202,0,0.367,0.164,0.367,0.366S16.79,4.875,16.588,4.875zM6.705,14.027h6.589c0.202,0,0.366-0.164,0.366-0.366s-0.164-0.367-0.366-0.367H6.705c-0.203,0-0.366,0.165-0.366,0.367S6.502,14.027,6.705,14.027z M6.705,11.83h6.589c0.202,0,0.366-0.164,0.366-0.365c0-0.203-0.164-0.367-0.366-0.367H6.705c-0.203,0-0.366,0.164-0.366,0.367C6.339,11.666,6.502,11.83,6.705,11.83z M6.705,9.634h6.589c0.202,0,0.366-0.164,0.366-0.366c0-0.202-0.164-0.366-0.366-0.366H6.705c-0.203,0-0.366,0.164-0.366,0.366C6.339,9.47,6.502,9.634,6.705,9.634z")
          deleteSVG.append(deletePath)
          deleteButton.appendChild(deleteSVG)
          let modifySVG = document.createElementNS("http://www.w3.org/2000/svg","svg")
          let modifyPath = document.createElementNS("http://www.w3.org/2000/svg","path")
          let modifyButton = document.createElement("button")
          modifyButton.setAttribute("data-modal-target","modify-modal")
          modifyButton.setAttribute("data-modal-toggle","modify-modal")
          modifySVG.setAttribute("viewBox","0 0 20 20")
          modifySVG.setAttribute("class","h-6 w-6 fill-black hover:bg-orange-600")
          modifyPath.setAttribute("d", "M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z")
          modifySVG.append(modifyPath)
          modifyButton.appendChild(modifySVG)
          divItem.appendChild(dnValue)
          userImage.style.height = '80px'
          userImage.style.width = '135px'
          newLi.appendChild(userImage)
          newLi.appendChild(divTranslationName)
          newLi.appendChild(divItem)
          let countryCards = visitedCountries.split(',')
          console.log(countryCards)
          countryCards.map(c => {
            let countryFlag = document.createElement("span")
            countryFlag.className = "fi fi-"+c.toLowerCase()
            newLi.appendChild(countryFlag)
          })
          newLi.appendChild(modifyButton)
          newLi.appendChild(deleteButton)
          // Push card values into array
          newLi.style.backgroundColor = '#FF9100'
          newLi.style.borderRadius = '20px'
          newLi.style.padding = '15px'
          newLi.style.width = '445px'
          newLi.style.height = '200px'
          newLi.style.display = 'block'
          newLi.style.margin = '10px'
          drivers.appendChild(newLi)
          modifyButton.addEventListener('click', function() {
            console.log(DNV)
            document.getElementById("modifyModalButton").click()
            document.getElementById('drivernamemodify').value = driverName
            document.getElementById('surnamemodify').value = surname
            document.getElementById('documentnumbermodify').value = documentNumberValue    
            document.getElementById('countryList').getElementsByTagName('option').selected = visitedCountries      
            DNVmodify = documentNumberValue
          });
          let driversCount = drivers.childElementCount
          deleteButton.addEventListener("click", function() {
            console.log(DNV)
            deleteDrivers(DNV)
            elementsCountDrivers--
            noDriversMessage.style.display = elementsCountDrivers == 0 ? "block":"none"
          });
          elementsCountDrivers++
          noDriversMessage.style.display = driversCount == 0 ? "block":"none"
          form.reset()
        }
      }