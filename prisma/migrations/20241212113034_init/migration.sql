-- DropForeignKey
ALTER TABLE `Group` DROP FOREIGN KEY `Group_creatorId_fkey`;

-- AlterTable
ALTER TABLE `Group` MODIFY `creatorId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Group` ADD CONSTRAINT `Group_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`uuid`) ON DELETE SET NULL ON UPDATE CASCADE;
