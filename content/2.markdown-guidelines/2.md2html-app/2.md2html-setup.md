---
title: Setup Index File
description: ''
position: 105
category: MD2HTML App
---

## MD2HTML v2.x

The file `index.md` MUST exist inside of each Technical  document folder. 

In v2.0 the file name extension was changed from `.md` to `.yaml`.
The `index.yaml` file MUST be added to the root folder for each document.

Example of an `index.yaml` file for MD2HTML v2.x:
        
```
---
title: "Lightweight Machine to MachineTechnical Specification: Core"
status: "Approved"
version: "1.2"
organizationName: "Open Mobile Alliance (OMA)"
date: "2020-11-10"
copyrightDate: "2023"
logo: "images/oma_logo.png"
documentName: "OMA-TS-LightweightM2M_Core-V1_2-20201110-A"
watermark: "DRAFT"
files:
- License.md
- OMA-TS-LightweightM2M_Core.md
- Appendix_A.md
- Appendix_B.md
- Appendix_C.md
- Appendix_D.md
- Appendix_E.md
- Appendix_F.md
- Appendix_G.md
- Appendix_H.md
- Appendix_I.md
- Appendix_J.md
- Appendix_K.md
- Appendix_L.md
- Appendix_M.md
---
# Detailed instructions see at https://markdown.standardshub.io/md2html-setup.
```

### Properties
* `title`
    * Title of the document, as displayed on the front page
* `status`
    * Document status, e.g., `Draft`, `Candidate`, `Approved`
* `version`
    * Document version, e.g., `V1.0.3`
* `organizationName`:
    * Represents the name of the organization.
* `date`
    * In format `YYYY-MM-DD`
* `copyrightDate`         
    * The copyright date is defined by this property.
* `logo`
    * This allows each document to have its own logo
* `documentName`
    * File name without extension format. See example above
* `watermark`
    * This property inserts a watermark inside of the PDF. 
    * Possible values are: "DRAFT",  "CANDIDATE", "HISTORIC", "DEPRECATED", "PRE-APPROVED", "APPROVED".
* `files`
    * This property represents a list of documents in the markdown that needs to be combined to create a final document.

<alert>In MD2HTML v2.0, the `License.md` contains the license defined for that particular document. It can be inserted at the top of the list of files or at the botoom.</alert>
