

git clone 'HTTPS'
Cloning into 'Aniket'...
remote: Counting objects: 100% (5/5), done.
remote: Total 5 (delta 0), reused 2 (delta 0), pack-reused 0
PS C:\Users\Z004SU2S> git commit -m "Initial commit"
fatal: not a git repository (or any of the parent directories): .git
PS C:\Users\Z004SU2S> git remote add origin https://github.com/aniket0609/Aniket
fatal: not a git repository (or any of the parent directories): .git
PS C:\Users\Z004SU2S> git status
fatal: not a git repository (or any of the parent directories): .git
PS C:\Users\Z004SU2S> git checkout test_branch
fatal: not a git repository (or any of the parent directories): .git
PS C:\Users\Z004SU2S> git checkout -b test_branch
fatal: not a git repository (or any of the parent directories): .git
PS C:\Users\Z004SU2S> dir ~/.ssh




----                 -------------         ------ ----
-a----         7/25/2023  11:59 AM           2610 id_rsa
-a----         7/25/2023  11:59 AM            578 id_rsa.pub
-a----         7/27/2023   8:40 AM            766 known_hosts
-a----         7/21/2023   8:48 AM             98 known_hosts.old


PS C:\Users\Z004SU2S> ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Z004SU2S/.ssh/id_rsa):
PS C:\Users\Z004SU2S> ssh-keygen -t rsa -b 4096 -C "ddavil402@gmail.com"   
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Z004SU2S/.ssh/id_rsa): 
C:\Users\Z004SU2S/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in C:\Users\Z004SU2S/.ssh/id_rsa.
Your public key has been saved in C:\Users\Z004SU2S/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:zN3RWxtA1OhM81kpKonI3z5lzI5st9E+r8aH3USX5Kw ddavil402@gmail.com
The key's randomart image is:
|            o+o .|
|    . . . . * O.=|
|     o + + o + O=|
|      . S = . oo.|
|       . . =.E  .|
|        o =...o..|
|         * oo= o.|
|        . o.oo=. |
PS C:\Users\Z004SU2S> ssh-add ~/.ssh/id_rsa
Error connecting to agent: No such file or directory
PS C:\Users\Z004SU2S> clip < ~/.ssh/id_rsa.pub
At line:1 char:6
+ clip < ~/.ssh/id_rsa.pub
+      ~
The '<' operator is reserved for future use.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : RedirectionNotSupported
 
PS C:\Users\Z004SU2S> ls


    Directory: C:\Users\Z004SU2S


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         4/16/2023   9:26 PM                .config
d-----         7/24/2023   1:03 PM                .dotnet
d-----         6/19/2023   9:12 AM                .idlerc
d-----          5/9/2023   4:01 PM                .ms-ad
d-----          7/2/2023  12:03 PM                .nuget
d-----         6/30/2023   8:21 AM                .omnisharp
d-----         7/25/2023  12:02 PM                .ssh
d-----         6/30/2023   8:19 AM                .templateengine
d-----         6/19/2023  10:05 AM                .vscode
d-r---          5/8/2023   4:01 PM                3D Objects
d-----         7/27/2023   9:04 AM                Aniket
d-r---          5/8/2023   4:01 PM                Contacts
d-r---         7/27/2023   8:44 AM                Desktop
d-r---          5/8/2023   3:59 PM                Documents
d-r---         7/27/2023   8:44 AM                Downloads
d-r---          5/8/2023   4:01 PM                Favorites
d-r---          5/8/2023   4:01 PM                Links
d-r---          5/8/2023   4:01 PM                Music
d-----          7/6/2023  10:40 AM                obj
d-r---          5/8/2023   4:02 PM                Pictures
d-r---          5/8/2023   4:01 PM                Saved Games
d-r---          5/8/2023   4:02 PM                Searches
d-----         7/25/2023  12:02 PM                test
d-r---         5/24/2023   8:29 AM                Videos
-a----         7/12/2023   3:30 PM            126 .gitconfig
-a----         7/25/2023  12:03 PM             20 .lesshst
-a----         6/19/2023  11:05 AM        2578580 get-pip.py
-a----         6/19/2023   9:09 AM        2578580 get-pip.pycurl
-a----         6/19/2023  10:11 AM           2092 new.cpp
-a----         6/30/2023  10:02 AM            105 Program.cs
-a----         6/19/2023   9:40 AM              0 py
-a----         6/30/2023  11:45 AM            335 Untitled-1.py
-a----          7/6/2023  10:40 AM            476 Z004SU2S.csproj

PS C:\Users\Z004SU2S> cd .ssh
PS C:\Users\Z004SU2S\.ssh> ssh -T git@github.com
Warning: Permanently added the ED25519 host key for IP address '140.82.121.3' to the list of known hosts.
git@github.com: Permission denied (publickey).
PS C:\Users\Z004SU2S\.ssh> cd ../
PS C:\Users\Z004SU2S> ssh -T git@github.com
git@github.com: Permission denied (publickey).
PS C:\Users\Z004SU2S> ssh -T git@github.com
PS C:\Users\Z004SU2S> cd Aniket
On branch main
Your branch is up to date with 'origin/main'.
Untracked files:
        test.py
nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\Z004SU2S\Aniket> git commit -m "Initial commit"
[main ef230a7] Initial commit
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:


 1 file changed, 0 insertions(+), 0 deletions(-)
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
To https://github.com/aniket0609/Aniket.git
   940ee46..ef230a7  main -> main
PS C:\Users\Z004SU2S\Aniket> git checkout -b test_branch
Switched to a new branch 'test_branch'
PS C:\Users\Z004SU2S\Aniket> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\Z004SU2S\Aniket> git checkout test_branch
Switched to branch 'test_branch'
PS C:\Users\Z004SU2S\Aniket> git checkout -d test_branch
HEAD is now at ef230a7 Initial commit
PS C:\Users\Z004SU2S\Aniket> git branch -d test_branch
Deleted branch test_branch (was ef230a7).
PS C:\Users\Z004SU2S\Aniket> git checkout main
Switched to branch 'main'
PS C:\Users\Z004SU2S\Aniket> git checkout test
Switched to a new branch 'test'
branch 'test' set up to track 'origin/test'.
PS C:\Users\Z004SU2S\Aniket> git add .
PS C:\Users\Z004SU2S\Aniket> git add .
PS C:\Users\Z004SU2S\Aniket> git commit -m "Initial commit"
On branch test
Your branch is up to date with 'origin/test'.
nothing to commit, working tree clean
PS C:\Users\Z004SU2S\Aniket> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\Z004SU2S\Aniket> git add .
PS C:\Users\Z004SU2S\Aniket> git commit -m "Initial commit"
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
PS C:\Users\Z004SU2S\Aniket> git add .
PS C:\Users\Z004SU2S\Aniket> git commit -m "Initial commit"
[main cdc5de3] Initial commit
 Committer: Raj <aniket.raj@siemens.com>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Aniket.pptx
PS C:\Users\Z004SU2S\Aniket> git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 11.76 MiB | 718.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/aniket0609/Aniket.git
   ef230a7..cdc5de3  main -> main
PS C:\Users\Z004SU2S\Aniket> git add .
warning: in the working copy of 'vapt/.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/public/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/public/manifest.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/public/robots.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/App.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/App.test.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/Chart.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/Component.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/Form.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/Form.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/History.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/Home.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/Home.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/Login.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/Table.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/convertToPdf.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/index.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/index.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/reportWebVitals.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vapt/src/setupTests.js', LF will be replaced by CRLF the next time Git touches it
PS C:\Users\Z004SU2S\Aniket> git add .
PS C:\Users\Z004SU2S\Aniket> git commit -m "Initial Commit"
[main 5d57099] Initial Commit
 Committer: Raj <aniket.raj@siemens.com>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 39 files changed, 20216 insertions(+)
 create mode 100644 Aniket2.pptx
 create mode 100644 New folder.zip
 create mode 100644 project-1.pptx
 create mode 100644 record/IFIP paper.pdf
 create mode 100644 record/IFIP_paper_summary.docx
 create mode 100644 record/M-1_malware_detection_analysis.pptx
 create mode 100644 record/M-3_features_of_malware.pptx
 create mode 100644 record/TSP_CMC_14510.pdf
 create mode 100644 record/window_update.pptx
 create mode 100644 vapt/.gitignore
 create mode 100644 vapt/README.md
 create mode 100644 vapt/package-lock.json
 create mode 100644 vapt/package.json
 create mode 100644 vapt/public/favicon.ico
 create mode 100644 vapt/public/index.html
 create mode 100644 vapt/public/logo192.png
 create mode 100644 vapt/public/logo512.png
 create mode 100644 vapt/public/manifest.json
 create mode 100644 vapt/public/robots.txt
 create mode 100644 vapt/server/index.js
 create mode 100644 vapt/src/App.js
 create mode 100644 vapt/src/App.test.js
 create mode 100644 vapt/src/Chart.js
 create mode 100644 vapt/src/Component.js
 create mode 100644 vapt/src/Form.css
 create mode 100644 vapt/src/Form.js
 create mode 100644 vapt/src/History.js
 create mode 100644 vapt/src/Home.css
 create mode 100644 vapt/src/Home.js
 create mode 100644 vapt/src/Login.css
 create mode 100644 vapt/src/Login.js
 create mode 100644 vapt/src/Table.js
 create mode 100644 vapt/src/convertToPdf.js
 create mode 100644 vapt/src/index.css
 create mode 100644 vapt/src/index.js
 create mode 100644 vapt/src/reportWebVitals.js
 create mode 100644 vapt/src/setupTests.js
PS C:\Users\Z004SU2S\Aniket> git push main
fatal: 'main' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\Z004SU2S\Aniket> git push origin main
Enumerating objects: 46, done.
Counting objects: 100% (46/46), done.
Delta compression using up to 8 threads
Compressing objects: 100% (44/44), done.
Writing objects: 100% (45/45), 15.55 MiB | 1.65 MiB/s, done.
Total 45 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/aniket0609/Aniket.git
   cdc5de3..5d57099  main -> main
PS C:\Users\Z004SU2S\Aniket> git rm main test.py       
fatal: pathspec 'main' did not match any files
PS C:\Users\Z004SU2S\Aniket> git rm test.py     
rm 'test.py'
PS C:\Users\Z004SU2S\Aniket> git commit -m "Delete test.py"    
[main 48b0643] Delete test.py
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 test.py
PS C:\Users\Z004SU2S\Aniket> git push origin branch_name
error: src refspec branch_name does not match any
error: failed to push some refs to 'https://github.com/aniket0609/Aniket.git'
PS C:\Users\Z004SU2S\Aniket> git push origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 227 bytes | 227.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/aniket0609/Aniket.git
   5d57099..48b0643  main -> main
PS C:\Users\Z004SU2S\Aniket> git add .
PS C:\Users\Z004SU2S\Aniket> git commit -m "Delete test.py"
[main 61592f4] Delete test.py
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

 14 files changed, 38529 insertions(+)
 create mode 100644 reasearch/infsec05_hids.pdf
 create mode 100644 reasearch/research-pdf/A Comprehensive Study on Malware Detection and.pdf
 create mode 100644 reasearch/research-pdf/A Novel Approach towards Windows Malware Detection System Using Deep Neural Networks.pdf
 create mode 100644 reasearch/research-pdf/MalwareAnalysis.pdf
 create mode 100644 reasearch/research-pdf/MalwareAnalysisReport.pdf
 create mode 100644 reasearch/research-pdf/Malware_Detection_and_Analysis_Challenges_and_Rese.pdf
 create mode 100644 reasearch/research-pdf/Malware_behaviour_analysis.pdf
 create mode 100644 reasearch/research-pdf/The rise of machine learning for detection and classification of malware.pdf
 create mode 100644 reasearch/self-reports/2.pptx
 create mode 100644 reasearch/self-reports/New Microsoft PowerPoint Presentation.pptx
 create mode 100644 reasearch/self-reports/New Microsoft Word Document.docx
 create mode 100644 reasearch/self-reports/malware_detection_analysis.pptx
 create mode 100644 reasearch/self-reports/refrence.txt
 create mode 100644 reasearch/self-reports/~$w Microsoft Word Document.docx
PS C:\Users\Z004SU2S\Aniket> git push origin main
Counting objects: 100% (20/20), done.
Delta compression using up to 8 threads
Compressing objects: 100% (18/18), done.
Writing objects: 100% (19/19), 8.30 MiB | 787.00 KiB/s, done.
Total 19 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 1 local object.
To https://github.com/aniket0609/Aniket.git
   48b0643..61592f4  main -> main
PS C:\Users\Z004SU2S\Aniket> git add .
 Committer: Raj <aniket.raj@siemens.com>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Antimalware techniques.xlsx
 create mode 100644 Antimalware techniques1.xlsx
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 66.12 KiB | 8.26 MiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/aniket0609/Aniket.git
   61592f4..0dbc821  main -> main
PS C:\Users\Z004SU2S\Aniket> git add .
PS C:\Users\Z004SU2S\Aniket> git commit -m "Initial Commit"
[main 5153a8f] Initial Commit
 Committer: Raj <aniket.raj@siemens.com>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 28 insertions(+)
 create mode 100644 New Text Document.txt
PS C:\Users\Z004SU2S\Aniket> git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 597 bytes | 597.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/aniket0609/Aniket.git
   0dbc821..5153a8f  main -> main
PS C:\Users\Z004SU2S\Aniket>



