---
title: Embed Files
description: ''
position: 197
category: MD2HTML App
---

## XML Files
You can embed an external file, e.g., `.xml`, `.json`, etc., into a markdown document using the constructors defined in this section:

* [:SUPP](#:supp)
* [:SUPP1](#:supp1)
* [:SUPP3](#:supp3)

### :SUPP
This constructor inserts data from a specified `XML` file inside an `HTML` document, presenting it as a table:
```md
{:supp [Repository_Name]/[Branch_Name] [Folder_Name]/[File_Name.xml]}
```

#### Any Branch Example
In this example, the file to insert is in a branch different from `master`.

```md
{:supp LwM2M-Objects/development Device/OMA-SUP-XML_LWM2M_Device-V1_0_Z.xml}
```

* `Repository_Name`: **LwM2M-Objects**
* `Branch_Name`:     **development**
* `Folder_Name`:      **Device**
* `File_Name`:       **OMA-SUP-XML_LWM2M_Device-V1_0_Z.xml**

Insert the selected document from the given repository and branch inside the `HTML` document. The Object file is stored in the **LwM2M-Object** repository, in the **development** branch, and inside a folder called **Device**.

#### 'master' Branch Example
In this example, the `XML` file is in the `master` branch, and the name `master` can be omitted.

```md
{:supp [Repository_Name]/ [Folder_Name]/[File_Name.xml]}
```
* The `Branch_Name` property is omitted.
* The rest of the properties are the same as above.

```md
{:supp LwM2M-Objects/ Device/OMA-SUP-XML_LWM2M_Device-V1_0_Z.xml}
```
Insert the selected document from the given repository and branch inside the `HTML` document.
The Object file is stored in the **LwM2M-Object** repository, in the **master** branch (which is omitted), and inside a folder called **Device**.

### :SUPP1
This instruction inserts an `XML` file stored on a `branch` or `release tag` into a `HTML` document.

```md
{:supp1 [Repository_Name]/[Branch_Name] | [Release_Name] [File_Name.xml]}
```

### :SUPP1 Examples:
In this example, the file to insert is stored in a `branch`.

```md
{:supp1 objects-lwm2m/dev LWM2M_Access_Control.xml}
```
* `Repository_Name`: **objects-lwm2m**
* `Branch_Name`:     **dev**
* `File_Name`:       **LWM2M_Access_Control.xml**

```md
{:supp1 objects-lwm2m/v1_1 LWM2M_Access_Control.xml}
```
In this example, the file to insert is stored in a `release tag` instead of a branch.

* `Repository_Name`: **objects-lwm2m**
* `Release_Name`:    **v1_1**
* `File_Name`:       **LWM2M_Access_Control.xml**

### :SUPP3
This instruction inserts any file type (.xml; .xsd; .html; etc.), from a selected repository and branch and optional `folder` into an `HTML` document.

```md
{:supp3 [Repository_Name]/[Branch_tag_Name] [Folder_Name] | [Without_Folder]/[File_Name.extension]}
```

#### :SUPP3 with Folder Example
In this example, the object is in a repository branch inside a `folder`.

```md
{:supp3 Test_LwM2M_v1_1/schema SUP/OMA-SUP-XML_LWM2M.xsd}
```

* `Repository_Name`: **Test_LwM2M_v1_1**
* `Branch_Name`:     **schema**
* `Folder_Name`:     **SUP**
* `File_Name`:       **OMA-SUP-XML_LWM2M.xsd**

#### :SUPP3 in the default branch with Folder Example
In this example, the object is in the `master` branch inside a `folder`.

```md
{:supp3 Test_LwM2M_v1_1/master SUP/OMA-SUP-XML_LWM2M.xsd}
```
or

```md
{:supp3 Test_LwM2M_v1_1/ SUP/OMA-SUP-XML_LWM2M.xsd}
```

* `Repository_Name`: **Test_LwM2M_v1_1**
* `Branch_Name`:     **master** (It is also possible to omit the name of the default branch, in this case, `master`)
* `Folder_Name`:     **SUP**
* `File_Name`:       **OMA-SUP-XML_LWM2M.xsd**

#### :SUPP3 without Folder Example
In this example the object is in the root of a repository branch (no folder):

```md
{:supp3 Test_LwM2M_v1_1/schema LWM2M.xsd}
```

* `Repository_Name`: **Test_LwM2M_v1_1**
* `Branch_Name`:     **schema**
* `Folder_Name`:     *none (file on the root)*
* `File_Name`:       **LWM2M.xsd**

#### :SUPP3 in a tag release inside of a folder Example

In this case the schema inserted is located in:

```md
{:supp3 LwM2M/v1_1-20180710-A SUP/OMA-SUP-XML_LWM2M.xsd}
```

* `Repository_Name`: **LwM2M**
* `Branch_Name`:     **v1_1-20180710-A** *(release tag_name)*
* `Folder_Name`:     **SUP**
* `File_Name`:       **OMA-SUP-XML_LWM2M.xsd**

