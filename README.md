# Plotting Data from CSV

<p>
This is a mini web application that allows users to upload CSV files and quickly visualize the data in tables, bar charts, or scatter plots. It is convenient, user-friendly, and ideal for small communities or departmental use, where quick data comparison and analysis are highly valuable.
</p>

## 🛠️ Methodology
- React for UX/UI and Flask for Backend
- hosted React on GitHub and Flask on Render

<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,ts,flask,python,github,vite,vscode" width="230" />
  </a>
</p>

## ⚠️ Limitations
- large amount of data can delay displaying the data on plots.
- *only csv file is recommended for this project.*
- Delay start up if no one is using. ( *Limitation for free plan of Render hosting* )

## 📦 Demo

<table>
  <tr>
    <td width="550" align="center">
      <img 
        src="https://github.com/John-Da/csvViewer-ReactFlask/blob/main/demoImgs/Screenshot%202025-11-23%20at%203.24.18%E2%80%AFPM.png" 
        width="520"
      />
    </td>
    <td>
      <b>Home Page:</b> User can Upload the CSV File and the file will be shown in the table, moreover, user can filter the uploaded file by Author or File name or Sorting.
    </td>
  </tr>
  <tr>
    <td width="550" align="center">
      <img 
        src="https://github.com/John-Da/csvViewer-ReactFlask/blob/main/demoImgs/Screenshot%202025-11-23%20at%203.23.50%E2%80%AFPM.png" 
        width="520"
      />
    </td>
    <td>
      <b>Upload File:</b> User can Upload file with meta data, leaving description of the file is better way to revise the data.
    </td>
  </tr>
  <tr>
    <td width="550" align="center">
      <img 
        src="https://github.com/John-Da/csvViewer-ReactFlask/blob/main/demoImgs/Screenshot%202025-11-23%20at%203.24.34%E2%80%AFPM.png" 
        width="520"
      />
    </td>
    <td>
      <b>View Ploat Page:</b> In this page, user can select prefered plot. In this case, it's shown in table. On the right side, those info will be familiar with who those have experience with data anlysis.
    </td>
  </tr>
  <tr>
    <td width="550" align="center">
      <img 
        src="https://github.com/John-Da/csvViewer-ReactFlask/blob/main/demoImgs/Screenshot%202025-11-23%20at%203.24.56%E2%80%AFPM.png" 
        width="520"
      />
    </td>
    <td>
      <b>View Plot Page (2):</b> This is Bar chart (uising Recharts for React)
    </td>
  </tr>
  <tr>
    <td width="550" align="center">
      <img 
        src="https://github.com/John-Da/csvViewer-ReactFlask/blob/main/demoImgs/Screenshot%202025-11-23%20at%203.25.10%E2%80%AFPM.png" 
        width="520"
      />
    </td>
    <td>
      <b>View Plot Page (3):</b> User can add more plots by clicking on (+) for adding and (-) for removing.
    </td>
  </tr>
  <tr>
    <td width="550" align="center">
      <img 
        src="https://github.com/John-Da/csvViewer-ReactFlask/blob/main/demoImgs/Screenshot%202025-11-23%20at%203.25.35%E2%80%AFPM.png" 
        width="520"
      />
    </td>
    <td>
      <b>View Plot Page (4):</b> The data can be shown in Scatter Plot too.
    </td>
  </tr>
  <tr>
    <td width="550" align="center">
      <img 
        src="https://github.com/John-Da/csvViewer-ReactFlask/blob/main/demoImgs/Screenshot%202025-11-23%20at%203.27.56%E2%80%AFPM.png" 
        width="520"
      />
    </td>
    <td>
      <b>Downloading:</b> User can download the original csv file or user can also download as json file.
    </td>
  </tr>
</table>

## ⭐️ Acknowledgement
- GitHub Pages
- [Render](https://render.com/) for Web Service Hosting

