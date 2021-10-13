import React, {useState, useEffect} from 'react'

export const ProgressBar = () => {

     
    useEffect(() => {
        const banner = document.querySelector(".banner")
        const checkbox = document.querySelector(".progress-ring__checkbox")
        const percent = document.querySelector(".progress-ring__percent")
        const circle = document.querySelector(".progress-ring__circle")
        let start = 0
        const radius = circle.r.baseVal.value
        const circumference = 2 * Math.PI * radius


        circle.style.strokeDasharray = `${circumference} ${circumference}`
        circle.style.strokeDashoffset = circumference

        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference
            circle.style.strokeDashoffset = offset
        }

        const interval = setInterval(() => {
            setProgress(start += 1)
            percent.textContent = start + "%"
            if(start == 100) {
                percent.classList.add("d-none")
                checkbox.classList.remove("d-none")
                banner.classList.remove("d-none")
                banner.classList.add("active")
                clearInterval(interval)
            }
        }, 10 )
        

    }, [])
    

    return <svg className="progress-ring" width="120" height="120">
        <g dominant-baseline="central">
            <circle className="progress-ring__circle" stroke="#7bbb4c" stroke-width="11" cx="60" cy="60" r="52" fill="transparent"/>

            <path className="progress-ring__checkbox d-none" d="M8.71986 3.48862C7.28611 5.03194 4.93635 7.98997 3.94069 9.27607C3.74156 9.06172 2.98485 8.50441 1.5511 7.98997C-0.241084 7.34692 -0.241084 8.63302 0.356312 9.27607C0.953708 9.91911 3.34329 13.7774 3.94069 15.0635C4.4186 16.0924 4.93635 15.0635 5.13548 14.4205C5.93201 12.4913 7.8835 8.11858 9.31725 6.06082C11.1094 3.48863 13.499 1.55948 13.499 0.916426C12.9016 -0.369673 10.512 1.55948 8.71986 3.48862Z" fill="#7bbb4c" transform="translate(35,30), scale(4)" />
            
            <text className="progress-ring__percent" x="50%" y="50%" text-anchor='middle'></text>
        </g>
    </svg>

    //radius = (width/2) - (stroke-width * 2)
}